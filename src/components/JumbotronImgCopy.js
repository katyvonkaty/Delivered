import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const JumbotronImgCopy = (props) => {
  return(
    <Jumbotron className="jumbotron">
      <Container centered fluid>
        <Row centered>
          <Col sm={{span: 6, offset: 3}} centered className="lighter">
          <h1> {props.title} </h1>
          <p> {props.content} </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}


export default JumbotronImgCopy
