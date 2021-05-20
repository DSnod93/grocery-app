import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map(item => item._id);
      
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
    
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        
      setTimeout(() => {
        window.location.assign('/');
      }, 8000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>

        <h2>
          Your grocery is on the way!
        </h2>

        <div className="container">
        <img src="https://media.giphy.com/media/xUOxfg0ESyhKOv4Vva/giphy.gif"/>
        </div>

        <h3>
          Thank you for your purchase! 
          <br/>
          <br/>
          You will now be redirected to the home page
        </h3>

        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>

      </Jumbotron>
    </div>
  );
};

export default Success;
