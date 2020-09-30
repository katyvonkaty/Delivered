
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Copy = (props) => {
  return (
        <Container fluid className="copy">
              <Row>
              <Col sm={{span:6, offset:3}}>
              <h3> {props.title} </h3>
              <p> {props.content} </p>
              <Button variant="outline-primary">{props.buttonText}</Button>{' '}
              </Col>
            </Row>
        </Container>
  )
}


export default Copy
