import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from "../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from '../assets/spinner.gif'
import Cart from '../components/Cart';

import Auth from '../utils/auth';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({})

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
  
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);
  

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id)
  
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  }

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });
  
    // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
    {currentProduct ? (
      <div className="container my-1">
        <br/>
      <Link to="/">
        ← Back to Products
      </Link>
          <div className="col s12 m7">
              <h4 className="header">{currentProduct.name}</h4>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={`/images/${currentProduct.image}`} alt={currentProduct.name}/>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{currentProduct.description}</p>
                  </div>
                  <div className="card-action">
                    <div className="row">
                      <button className="btn waves-effect waves-light green" onClick={addToCart}>
                        Add to Cart
                      </button>
                      <br/>
                      <br/>
                      <button className="btn waves-effect waves-light red" disabled={!cart.find(p => p._id === currentProduct._id)} onClick={removeFromCart}>
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>

      {Auth.loggedIn() && <CommentForm currentProductId={currentProduct._id} />}

      <br/>
      <hr/>
      <br/>

      <CommentList comments={currentProduct.comments} />

      </div>

      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
      <Cart />

    </>
  );
};

export default Detail;
