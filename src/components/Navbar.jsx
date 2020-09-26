import React from 'react';
import { Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = ()=>{
   return(

           <nav className="nav-wrapper">
               <div className="container">
                   <Link to="/" className="brand-logo">Delivered</Link>

                   <ul className="right">
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/">My cart</Link></li>
                       <li><Link to="/cart">Shopping Cart <ShoppingCartIcon /></Link></li>
                   </ul>
               </div>
           </nav>

   )
}

export default Navbar;
