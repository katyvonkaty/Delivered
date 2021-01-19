import React, { Component } from 'react';
import Copy from './Copy';
import Footer from './Footer';
import CopyImg from "./CopyImg";
import BigImg from "./BigImg";
import CarouselItems from "./CarouselItems";
import JumbotronImgCopy from "./JumbotronImgCopy";
import Demo from './demo/Demo';


class Home extends Component{


    render(){

        return(
          <React.Fragment>
            <Demo />
            <JumbotronImgCopy title="Super-moist and packed with flavor" />
            <CarouselItems />
            <Copy
            title= "Baking Wisdom"
            content= "Whenever we have a company gathering, this pumpkin bread is one of the first things to disappear. Super-moist and packed with flavor, it can be made into a simple pumpkin loaf; or enhanced with chocolate chips and/or nuts. Or raisins"
            buttonText="View Best Sellers"
            />

            <CopyImg
            heading="Perfectly Pillowy Cinnamon Rolls"
            copy="There’s something magical about warm-from-the-oven cinnamon rolls. Unfortunately, that magic often evaporates as the rolls cool. If only it were possible to serve fresh, soft rolls first thing in the morning — without getting up at midnight to make them!"
            buttonText="lets go"
            img="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-12/perfectly-pillowy-cinnamon-rolls.jpg?itok=03h7-5jI"

            />

            <BigImg
            img="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1070-3-large.jpg?itok=DEoaSMRA"
            />

           <Footer />


          </React.Fragment>

)}};

export default Home;
