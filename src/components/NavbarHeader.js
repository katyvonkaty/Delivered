// import React, { Component } from 'react';
// import Item7 from '../images/crisp.png'
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import Item8 from 'crisp.png'
//
//
// import { Link} from "react-router-dom";
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//
//
//
// // class NavbarHeader extends Component{
// //   render() {
// //     return(
// //       <nav className="nav-wrapper stackable" className="centered">
// //           <div className="container">
// //             <ul className="centered">
// //               <Link to="/" className="brand-logo cent"> <img src={crisp} /></Link>
// //               </ul>
// //           </div>
// //       </nav>
// //     )
// //   }
// // }
//
//
//
//
// export default NavbarHeader;


// import React, { Component } from 'react';
//
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import React, { Component } from 'react'
import { Link} from "react-router-dom";
import crisp from '../crisp.png';

import { Input, Menu } from 'semantic-ui-react'

 class NavbarItems extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu.Menu className="ui fluid one item menu" position='center'>
      <Menu secondary >

        <Link to="/">
          <img className="brand-logo crisp" src={crisp} />

        </Link>

        </Menu>
        </Menu.Menu>
    )
  }
}







export default NavbarItems;
