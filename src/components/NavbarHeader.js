import React, { Component } from 'react'
import { Link} from "react-router-dom";
import crisp from '../crisp.png';

import {  Menu } from 'semantic-ui-react'

 class NavbarItems extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <Menu.Menu className="ui fluid one item menu" position='center'>
      <Menu secondary >

        <Link to="/">
          <img className="brand-logo crisp" src={crisp} alt="logo"/>

        </Link>

        </Menu>
        </Menu.Menu>
    )
  }
}







export default NavbarItems;
