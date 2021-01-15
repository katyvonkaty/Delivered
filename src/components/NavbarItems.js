// import React, { Component } from 'react';
//


import React, { Component } from 'react'

import { Link} from "react-router-dom";

import { Menu } from 'semantic-ui-react'

 class NavbarItems extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu.Menu className="ui fluid item menu stackable" position='center'>
      <Menu secondary >


        <Link to="/about">
          <Menu.Item
            name='Recipes'
            active={activeItem === 'recipes'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/sweets">
          <Menu.Item
            name='Items'
             position='center'
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/cart">
          <Menu.Item
            name='Shopping Cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}

          />

        </Link>

        </Menu>
        </Menu.Menu>
    )
  }
}



export default NavbarItems;
