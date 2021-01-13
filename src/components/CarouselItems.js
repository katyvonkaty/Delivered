import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import cookies from '../images/cookies.jpg';



// import Caption from 'react-bootstrap/Caption';


//
// const CarouselItems = () => {
//   return (
//         <Container fluid>
//         <Carousel>
//           <Carousel.Item interval={1000}>
//             <img
//               className="d-block w-100"
//               src="https://www.handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item interval={500}>
//             <img
//               className="d-block w-100"
//               src="https://www.streetfoodguy.com/wp-content/uploads/2020/04/mcdonalds-758x426.jpeg"
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="holder.js/800x400?text=Third slide&bg=20232a"
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//         </Container>
//   )
// }
//
// export default CarouselItems

function CarouselItems()  {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cookies}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cookies}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cookies}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselItems
