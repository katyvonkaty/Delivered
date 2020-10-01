import React, { Component } from 'react';

import { Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



class Navbar extends Component{
  render() {
    return(
      <nav className="nav-wrapper">
          <div className="container">
            <ul className="left">
              <Link to="/" className="brand-logo">Delivered</Link>
              </ul>

              <ul className="right">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/sweets">Sweets</Link></li>
                  <li><Link to="/cart">Shopping Cart <ShoppingCartIcon /></Link></li>
              </ul>
          </div>
      </nav>
    )
  }
}




export default Navbar;
