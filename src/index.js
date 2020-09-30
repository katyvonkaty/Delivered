import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// const path = require("path");
// const express = require("express");
// const app = express();
// const publicPath = path.join(__dirname, '..', "public") ;
// const port = process.env.PORT || 3000;

//
// app.use(express.static(publicPath)); //here is important thing - no static directory, because all static :)
//
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(publicPath, "index.html"));
// });

const store = createStore(cartReducer);



// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
