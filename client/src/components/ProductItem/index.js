import React from "react";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  
    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    
  <div>
      <div className="col s12 m6 l2">
        <div className="card">
          <div className="card-image">
            <img alt={name} src={`/images/${image}`}/>
          </div>
          <div className="card-content">
            <a className="card-title" href={`/products/${_id}`} >{name}</a>
            <strong>${price}</strong>
            <p>{quantity} {pluralize("item", quantity)} in stock</p>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light deep-orange darken-3 " onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default ProductItem;
