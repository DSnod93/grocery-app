import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;
      
        if (value === '0') {
          dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
          });
        
          idbPromise('cart', 'delete', { ...item });
        } else {
          dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: item._id,
            purchaseQuantity: parseInt(value)
          });
        
          idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
    };

  return (

    <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={`/images/${item.image}`} alt="" className="circle"/>
          <span className="title">{item.name}</span>
          <p>${item.price}<br/>
          </p>
          <label htmlFor="qty">Qty:<br/>
          <input
                id="qty"
                type="number"
                placeholder="1"
                value={item.purchaseQuantity}
                onChange={onChange}
            />
          </label>
          <a href="#!" className="secondary-content" onClick={() => removeFromCart(item)}><i className="small material-icons red-text">clear</i></a>
          </li>
      </ul>
    </div>
  );
}

export default CartItem;