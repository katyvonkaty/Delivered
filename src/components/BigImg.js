import React, { Component } from 'react';
import Container from "react-bootstrap/Container";

const BigImg = (props) => {

    return (
      <Container fluid>
      <img className="bigimg" src={props.img} alt="cookies" />
      </Container>
    )

}

export default BigImg
