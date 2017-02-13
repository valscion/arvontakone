import React, { Component } from 'react';
import {FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';

class Arvonta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arvontakerrat: "1",
      arvostelukohdat: "8",
      osallistujat: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.lahetaTiedot}>
        <h2>Arvontakone</h2>

        <FormGroup controlId="arvontakerrat">
          <Col sm={12}>
            <ControlLabel>Arvontakerrat:</ControlLabel>
            <FormControl 
              type="number" 
              min="1"
              max="999"
              value={this.state.arvontakerrat}
              onChange={this.nappaaArvontakerrat}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="arvostelukohdat">
          <Col sm={12}>
            <ControlLabel>Arvostelukohdat (väh. 5):</ControlLabel>
            <FormControl 
              type="number" 
              min="5"
              max="999"
              value={this.state.arvostelukohdat}
              onChange={this.nappaaArvostelukohdat}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="osallistujat">
          <Col sm={12}>
            <ControlLabel>Osallistujat:</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              rows="6" 
              placeholder="osallistujat"
              value={this.state.osallistujat}
              onChange={this.nappaaOsallistujat}
             />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button type="submit">
              Arvo tulokset
            </Button>
          </Col>
        </FormGroup>
      </form>
    );
  }

  nappaaArvontakerrat = (event) => {
    const arvo = event.target.value;
    if(arvo.match(/^[0-9]{0,3}$/)){
      this.setState({arvontakerrat: arvo});
    }
  }

  nappaaArvostelukohdat = (event) => {
    const arvo = event.target.value;
    if(arvo.match(/^[0-9]{0,3}$/)){
      this.setState({arvostelukohdat: arvo});
    }
  }

  nappaaOsallistujat = (event) => {
    this.setState({osallistujat: event.target.value});
  }

  lahetaTiedot = (event) => {
    event.preventDefault();
    this.props.nappaaArvot(this.state);
  }

}

export default Arvonta;
