import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item8 from '../images/item8.jpg'
import Button from 'react-bootstrap/Button';



class CopyImg extends Component {

  render(){
    return (
      <Container fluid className="copyimg">

      <Row>
        <Col sm={{span:4, offset:1}}> <h4> EVERYONE has a favorite chocolate chip cookie recipe; this is ours. </h4>
        <p> EVERYONE has a favorite chocolate chip cookie recipe; this is ours. </p>
        <Button variant="outline-primary">Learn More</Button>{' '}
        </Col>
        <Col sm={6}><img className="cinnamon" src={Item8} /></Col>

      </Row>

      </Container>


    )
  }
}


export default CopyImg
