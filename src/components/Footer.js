import React from 'react'
import { Grid } from 'semantic-ui-react'


const Footer = () => (
  <Grid divided='vertically' className="footer stackable">
  <h4> Visit Us </h4>
    <Grid.Row columns={3}>
      <Grid.Column>
        <h5> Washington DC </h5>
        <p>AT CAPITOL RIVERFONT
        1201 HALF STREET SE
        WASHINGTON DC 20003
        202.817.3133 </p>
      </Grid.Column>
      <Grid.Column>
        <h5> New York Midtown </h5>
        <p>COMING SOON
601 LEXINGTON AVENUE
NEW YORK, NY 10022</p>
      </Grid.Column>
      <Grid.Column>
      <h5> New York West Village </h5>
      <p>28 GREENWICH AVE
NEW YORK, NY 10011

212.498.9810</p>
      </Grid.Column>
    </Grid.Row>
    © 2021 Cockapoo Farms LLC
  </Grid>
)

export default Footer
