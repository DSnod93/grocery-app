import { useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect } from "react";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        async function getCart() {
          const cart = await idbPromise('cart', 'get');
          dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        };
      
        if (!state.cart.length) {
          getCart();
        }
    }, [state.cart.length, dispatch]);

    // stripe useEffect()
    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
      }, [data]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });

    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];
      
        state.cart.forEach((item) => {
          for (let i = 0; i < item.purchaseQuantity; i++) {
            productIds.push(item._id);
          }
        });

        getCheckout({
            variables: { products: productIds }
        });
    }

if (!state.cartOpen) {
    return (

      <div className="fixed-action-btn" onClick={toggleCart}>
        <a className="btn-floating btn-large amber darken-3 pulse">
          <i className="large material-icons">shopping_cart</i>
        </a>
      </div>
      
    );
  }

  return (
    <div className="cart">
        <div className="close" onClick={toggleCart}>
            <a className="waves-effect waves-light btn red">
                <i className="medium material-icons right white-text">chevron_right</i>
                BACK
            </a>
        </div>
        <p>Your Cart:</p>
        {state.cart.length ? (
            <div>
                {state.cart.map(item => (
                    <CartItem key={item._id} item={item} />
                ))}
                <div className="row">
                    <div className="col s6">
                        <strong>Total: ${calculateTotal()}</strong>
                        
                    </div>
                    <div className="col s6">
                        {
                        Auth.loggedIn() ?
                        <button className="waves-effect waves-light green btn" onClick={submitCheckout}>
                          Checkout
                        </button>
                        :
                        <span>(log in to check out)</span>
                        }
                    </div>
                </div>
            </div>
        ) : (
            <p>
              is Empty
            </p>
        )}
    </div>
  );
};

export default Cart;