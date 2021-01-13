import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import NavbarHeader from './components/NavbarHeader'
import NavbarItems from './components/NavbarItems'

import Home from './components/Home'
import Cart from './components/Cart'
import Sweets from './components/Sweets'
import About from './components/About'
// import { HashRouter, Route, Link } from "react-router-dom";




class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
            <div className="App">
                <NavbarHeader/>
                <NavbarItems/>
                <Route exact path="/" component={Home}/>
                <Route path="/sweets" component={Sweets}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/about" component={About}/>
             </div>
       </HashRouter>

    );
  }
}

export default App;
