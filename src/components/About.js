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


            <Copy />
            <CopyImg />
            <BigImg />
            <Copy />


          </React.Fragment>

)}};

export default About;
