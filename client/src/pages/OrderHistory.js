import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container">
        <br/>
        <Link to="/">
          ← Back to Products
        </Link>

        <br/>

        {user ? (
          <>
            <p>Order History for {user.firstName} {user.lastName}</p>
            {user.orders.map((order) => (
            <ul className="collection with-header" key={order._id}>
              <li className="collection-header orange accent-1"><p>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p></li>
              {order.products.map(({ _id, image, name, price }, index) => (
              <li className="collection-item" key={index}>
                  <Link to={`/products/${_id}`}>
                  <p>{name}</p>
                  </Link>
                  <span>${price}</span>
              </li>
              ))}
            </ul>
            ))}

          </>
        ) : null}

      </div>

    </>)

};

export default OrderHistory;
