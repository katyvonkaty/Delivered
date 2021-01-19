import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';


import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const CarouselItems = () => {
  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }

  return (
    <div>
    <Container className="carouselItems">
    <h1> Best Sellers </h1>
    <p> Nothing could be more festive on the holiday table than a tray of these, buttery, confectioners' sugar-dusted, jam-packed cookies, created by blogger Alexandra Stafford at Alexandra's Kitchen. The hint of lemon in the dough nicely complements any number of fillings, from raspberry jam to lemon curd. </p>
        <Carousel arrows
          value={value}
          onChange={onChange}
          animationSpeed={300}
        >
          <img className="img-example" src={"https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/1406-3-large.jpg?itok=tIBtRfG2"} />
          <img className="img-example" src={"https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/6127-3-large.jpg?itok=lkbotW9P"} />
          <img className="img-example" src={"https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/1766-3-large.jpg?itok=uqx6vW4X"} />
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselItems;
