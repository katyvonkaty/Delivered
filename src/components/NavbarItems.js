// import React, { Component } from 'react';
//
// import { Link} from "react-router-dom";
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

 class NavbarItems extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu.Menu position='center'>
      <Menu secondary >
        <Menu.Item
          name='home'
           position='center'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        </Menu>
        </Menu.Menu>
    )
  }
}


// class NavbarItems extends Component{
//   render() {
//     return(
//       <Grid centered>
//       <nav className="nav-wrapper" centered>
//           <div className="container">
//             <ul className="center aligned">
//                 <li><Link to="/about"> Shipping </Link></li>
//                 <li><Link to="/sweets">Sweets</Link></li>
//                 <li><Link to="/cart">Shopping Cart</Link></li>
//                 <li><Link to="/about"> Shipping </Link></li>
//                 <li><Link to="/sweets">Sweets</Link></li>
//                 <li><Link to="/cart">Shopping Cart <ShoppingCartIcon /></Link></li>
//             </ul>
//           </div>
//       </nav>
//     )
//   }
// }




export default NavbarItems;
