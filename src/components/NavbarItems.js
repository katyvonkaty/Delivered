import React, { Component } from 'react';

import { Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



class NavbarItems extends Component{
  render() {
    return(
      <nav className="nav-wrapper" centered>
          <div className="container">
            <ul className="center aligned">
                <li><Link to="/about"> Shipping </Link></li>
                <li><Link to="/sweets">Sweets</Link></li>
                <li><Link to="/cart">Shopping Cart <ShoppingCartIcon /></Link></li>
            </ul>
          </div>
      </nav>
    )
  }
}




export default NavbarItems;
