import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel, Checkbox} from 'react-bootstrap';

class Arvonta extends Component {
  render() {
    return (
      <Form>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={12}>
            <ControlLabel>Arvontakerrat:</ControlLabel>
            <FormControl type="text" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <Col sm={12}>
            <ControlLabel>Osallistujat:</ControlLabel>
            <FormControl componentClass="textarea" rows="10" placeholder="osallistujat" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Checkbox>Lisää {"<br />"}-tagit</Checkbox>
            <Checkbox>Lihavoi sijoittuneet</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button type="button">
              Arvo tulokset
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Arvonta;
