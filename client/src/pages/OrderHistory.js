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
      <div className="container my-1">
        <br/>
        <Link to="/">
          ← Back to Products
          </Link>

        {user ? (
          <>
            <p>Order History for {user.firstName} {user.lastName}</p>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <span>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</span>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>)

};

export default OrderHistory;
