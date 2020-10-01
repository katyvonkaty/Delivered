import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Copy from './Copy';
import CopyImg from "./CopyImg";
import BigImg from "./BigImg";



class Home extends Component{

    render(){

        return(
          <React.Fragment>

          <Jumbotron fluid className="about">
            <Container>
              // <Row>
              //   <Col sm={4}> <a href="/about"> <h3 className="link"> About </h3>  </a></Col>
              // </Row>
              //
              // <Row>
              //   <Col sm={4}><a href="/sweets"> <h3 className="link"> Order </h3> </a></Col>
              // </Row>
              //
              // <Row>
              //   <Col sm={4}> <a href="/about"><h3 className="link"> Photos </h3> </a> </Col>
              // </Row>
              //
              // <Row>
              //   <Col sm={4}><h3 className="link"> Contact </h3></Col>
              // </Row>

            </Container>
          </Jumbotron>


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
              buttonText="lets go"
            />


          </React.Fragment>

)}};

export default Home;
