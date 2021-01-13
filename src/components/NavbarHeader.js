import React, { Component } from 'react';
import Item7 from '../images/crisp.png'
// import Item8 from 'crisp.png'
import crisp from '../crisp.png';


import { Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



class NavbarHeader extends Component{
  render() {
    return(
      <nav className="nav-wrapper" className="centered">
          <div className="container">
            <ul className="centered">
              <Link to="/" className="brand-logo"> <img src={crisp} /></Link>
              </ul>
          </div>
      </nav>
    )
  }
}




export default NavbarHeader;
