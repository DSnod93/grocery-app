import React from "react";
import Auth from "../../utils/auth";

// For mobile nav initialization
const M =window.M;

// Initializes the mobile nav
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

function Nav() {

    if (Auth.loggedIn()) {
      return (
 version/materialize
        <>
          <nav>
            <div className="nav-wrapper lime darken-3">
              <div className="container">
                <a href="/" className="brand-logo">GroceryApp</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/orderHistory"><i className="material-icons left" >history</i>Order History</a></li>
                  <li><a href="/" onClick={() => Auth.logout()}><i className="material-icons left">person_outline</i>Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* mobile nav */}
          <ul className="sidenav" id="mobile-demo">
            <li><a href="/orderHistory"><i className="material-icons left" >history</i>Order History</a></li>
            <li><a href="/" onClick={() => Auth.logout()}><i className="material-icons left">person_outline</i>Logout</a></li>
          </ul>          
        </>

      );
    } else {
      return (

        <>

        <nav>
          <div className="nav-wrapper green lighten-1">
            <div className="container">
              <a href="/" className="brand-logo">GroceryApp</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/signup"><i className="material-icons left" >person_add</i>Signup</a></li>
                <li><a href="/login"><i className="material-icons left">person</i>Login</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* mobile nav */}
        <ul className="sidenav" id="mobile-demo">
          <li><a href="/signup"><i className="material-icons left" >person_add</i>Signup</a></li>
          <li><a href="/login"><i className="material-icons left">person</i>Login</a></li>
        </ul>
        
      </>

      );
    }
  

  // return (
  //   <div>
  //     <nav>
  //       <div className="nav-wrapper green lighten-1">
  //           <a href="/" className="brand-logo">GroceryApp</a>
  //           <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
  //           <ul id="nav-mobile" className="right hide-on-med-and-down">
  //             {showNavigation()}
  //           </ul>
  //       </div>
  //     </nav>

  //   </div>

  // );

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
          FoodChain
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
 main
}

export default Nav;
