import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Item9 from '../images/item9.jpg';

class BigImg extends Component {

  render() {
    return (
      <Container fluid>
      <img className="bigimg" src={Item9} alt="cookies" />
      </Container>
    )
  }
}

export default BigImg
