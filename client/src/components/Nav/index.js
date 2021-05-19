import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar" role="navigation" aria-label="dropdown navigation">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Menu
            </a>

            <div className="navbar-dropdown">
              <Link to="/orderHistory" className="navbar-item">
                Order History
              </Link>
              <a href="/" onClick={() => Auth.logout()} className="navbar-item">
                Logout
              </a>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar" role="navigation" aria-label="dropdown navigation">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Menu
            </a>

            <div className="navbar-dropdown">
              <Link to="/signup" className="navbar-item">
                Sign Up
              </Link>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
            </div>
          </div>
        </nav>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          The Food Chain
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
