import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div className="container">
      <Jumbotron>
          <div className="col s12">
            <div className="col s12 m7">
              <h1>SORRY</h1>
              <div className="card">
                <div className="card-image">
                  <img src={process.env.PUBLIC_URL + "/images/404.jpg"} alt="404"/>
                  <span className="card-title text-black">SORRY</span>
                </div>
                <div className="card-content">
                  <h4>We couldn't find that page. Please click the link below to go back</h4>
                </div>
                <div className="card-action">
                  <a href="/">BACK TO HOME PAGE</a>
                </div>
              </div>
            </div>
          </div>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
