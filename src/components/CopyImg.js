import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const CopyImg = (props) => {
    return (
      <Container fluid className="copyimg">
        <Row>
          <Col sm={{span:4, offset:1}}> <h4> {props.heading} </h4> <br />
          <p> {props.copy} </p>
          <Button variant="outline-primary">{props.buttonText}</Button>{' '}
          </Col>
          <Col sm={6}><img className="cinnamon" src={props.img} /></Col>

        </Row>
      </Container>


    )
}


export default CopyImg
