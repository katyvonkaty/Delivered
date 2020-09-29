
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Copy = (props) => {
  return (
        <Container fluid className="copy">
              <Row>
              <Col sm={{span:6, offset:3}}>
              <h3> {props.title} </h3>
              <p> {props.content} </p>
              </Col>
            </Row>
        </Container>
  )
}

// class Copy extends Component{
//
//     render(){
//         return(
//           <Container fluid className="copy">
//               <Row>
//                 <Col sm={{span:6, offset:3}}>
//                 <h3> About Us </h3>
//                 <p> EVERYONE has a favorite chocolate chip cookie recipe; this is ours. These golden cookies are packed with chips and loaded with buttery flavor. They walk the line nicely between crunchy and chewy: the edges are crisp, while </p>
//                 </Col>
//               </Row>
//           </Container>
//
//         )
//     }
// }
//



export default Copy
