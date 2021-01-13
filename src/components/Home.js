import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Copy from './Copy';
import CopyImg from "./CopyImg";
import BigImg from "./BigImg";
import JumbotronImgCopy from "./JumbotronImgCopy";



class Home extends Component{


    render(){

        return(
          <React.Fragment>

          <JumbotronImgCopy
          title="Chocolate Chip Oatmeal Cookies"
          content="This molasses-dark, ginger-and-spice flavored cookie is perfect for gingerbread men. We roll it a bit thicker than usual, to give the cookies just a hint of chew. While ginger is often thought of as a winter baking flavor, we've found that ginger pairs well with various fruits, too"

          />

            <Copy
            title= "Super-moist and packed with flavor"
            content= "Whenever we have a company gathering, this pumpkin bread is one of the first things to disappear. Super-moist and packed with flavor, it can be made into a simple pumpkin loaf; or enhanced with chocolate chips and/or nuts. Or raisins"
            buttonText="lets go"
            />

            <CopyImg
            heading="Chocolate Fudge Bundt Cake"
            copy="This moist, nicely dense fudge cake has an ultra-fine grain: think pound cake. Topped with a thick layer of rich ganache, it's a chocolate lover's dream come true."
            buttonText="lets go"
            img="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/9013-3-large.jpg?itok=dB2j5_Nf"

            />

            <BigImg
            img="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1070-3-large.jpg?itok=DEoaSMRA"
            />

            <Copy
            title= "Original Cake Pan Cake"
            content= "Now we're proud to name this our 225th Anniversary Recipe of the Centuries. Dark, moist, delicious, and CHOCOLATE, this is truly a cake for all reasons, all seasons — and for bakers (and their family and friends) everywhere."
              buttonText="here we go!"
            />


          </React.Fragment>

)}};

export default Home;
