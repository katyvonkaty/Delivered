import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item8 from '../images/item8.jpg'


class CopyImg extends Component {

  render(){
    return (
      <Container fluid>

      <Row>
        <Col sm={{span:4, offset:1}}> <h4> EVERYONE has a favorite chocolate chip cookie recipe; this is ours. </h4>
        <p> EVERYONE has a favorite chocolate chip cookie recipe; this is ours. </p>
        </Col>
        <Col sm={6}><img className="cinnamon" src={Item8} /></Col>

      </Row>

      </Container>


    )
  }
}


export default CopyImg
