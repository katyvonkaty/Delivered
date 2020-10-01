import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Sweets from './components/Sweets'
import About from './components/About'



class App extends Component {

  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/sweets" component={Sweets}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/about" component={About}/>
                </Switch>
             </div>
       </BrowserRouter>

    );
  }
}

export default App;
