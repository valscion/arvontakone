import React, { Component } from 'react';
import {Grid, Jumbotron, Row, Col} from 'react-bootstrap';

class Tiedot extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Arvontakone</h1>
        </Jumbotron>

        <Grid>
          <Row>
            <Col sm={12}>Arvontakone woop woop</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Tiedot;
