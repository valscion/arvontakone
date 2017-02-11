import React, { Component } from 'react';
import {FormGroup, FormControl, Col, Button, ControlLabel, Checkbox} from 'react-bootstrap';

class Arvonta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arvontakerrat: "1",
      osallistujat: "",
      brTagi: false,
      boldattu: false
    };
  }

  render() {
    return (
      <form onSubmit={this.lahetaTiedot}>
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

        <FormGroup controlId="osallistujat">
          <Col sm={12}>
            <ControlLabel>Osallistujat:</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              rows="1" 
              placeholder="osallistujat"
              value={this.state.osallistujat}
              onChange={this.nappaaOsallistujat}
             />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Checkbox checked={this.state.brTagi} onChange={this.nappaaBrTagi}>Lisää {"<br />"}-tagit</Checkbox>
            <Checkbox checked={this.state.boldattu} onChange={this.nappaaBoldattu}>Lihavoi sijoittuneet</Checkbox>
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

  nappaaOsallistujat = (event) => {
    this.setState({osallistujat: event.target.value});
  }

  nappaaBrTagi = (event) => {
    this.setState({brTagi: event.target.checked});
  }

  nappaaBoldattu = (event) => {
    this.setState({boldattu: event.target.checked});
  }

  lahetaTiedot = (event) => {
    event.preventDefault();
    this.props.nappaaArvot(this.state);
  }

}

export default Arvonta;
