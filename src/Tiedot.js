import './Tiedot.css';
import React, { Component } from 'react';
import {Grid, Jumbotron, Row, Col} from 'react-bootstrap';

class Tiedot extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="otsikko">
          <h1>Koulukone</h1>
          <p>Arvontakone virtuaalisille kouluratsatuskilpailuille</p>
        </Jumbotron>

        <Grid>
          <Row>
            <Col sm={12}>
              <p className="esittely">
                  Tällä arvontakoneella voi arpoa tulokset kouluratsastuskilpailuista. Koneeseen syötetään haluttu arvontakertojen määrä (1-999), haluttu arvostelukohtien määrä (eli kuinka monta kertaa kullekin ratsukolle annetaan pisteet 1-10) sekä luokan osallistujat. Tuloksiin saa näkyviin halutessaan sijoittuneiden lisäksi prosentit sekä ratsukon pisteet ja tulosten kopioimista helpoittamaan myös {'<br />'} ja {'<strong />'} tagit.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Tiedot;
