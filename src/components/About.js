import React from 'react';
import CopyImg from "./CopyImg";
import BigImg from "./BigImg";

const About = (props) => {

  return(
      <React.Fragment>
          <BigImg
          img="https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/5227-3-large.jpg"
          />
          <CopyImg
          heading="Classic Peanut Butter Cookies"
          copy="This may be the simplest recipe you've ever made! It's hard to imagine that so few ingredients can create such perfection in a cookie; so if you like peanut butter, chocolate, and are living flour-free, then this recipe is a must-try!"
          buttonText="lets go"
          img="https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/17-3-large.jpg"

          />
    </React.Fragment>

  )
}

export default About
