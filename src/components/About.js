import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Copy from './Copy';
import CopyImg from "./CopyImg";
import BigImg from "./BigImg";



class About extends Component{

    render(){

        return(
          <React.Fragment>

          <Jumbotron fluid className="about">
            <Container>
              <Row>
                <Col sm={4}> <h3 className="link"> About </h3></Col>
              </Row>

              <Row>
                <Col sm={4}><a href="/"> <h3 className="link"> Order </h3> </a></Col>
              </Row>

              <Row>
                <Col sm={4}> <h3 className="link"> Photos </h3> </Col>
              </Row>

              <Row>
                <Col sm={4}><h3 className="link"> Contact </h3></Col>
              </Row>

            </Container>
          </Jumbotron>


            <Copy
            title= "Wow check out this prop"
            content= "propping so hard"
            buttonText="lets go"
            />

            <CopyImg
            heading="look ma no hands"
            copy="working?"
            buttonText="lets go"
            img="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/4239-3-large.jpg?itok=29sxdN-S"

            />
            <BigImg />

            <Copy
            title= "More Props"
            content= "Prop so hard"
              buttonText="lets go"
            />


          </React.Fragment>

)}};

export default About;
