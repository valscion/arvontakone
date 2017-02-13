import React, { Component } from 'react';
import {Grid, Row, Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';

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
      <div>
      <h2>Arvontakone</h2>

      <Grid>
        <Row>
          <Form horizontal onSubmit={this.lahetaTiedot}>
            <FormGroup controlId="formHorizontalArvontakerrat">
              <Col componentClass={ControlLabel} sm={2}>
                Arvontakerrat
              </Col>
              <Col sm={9}>
                <FormControl
                  type="number" 
                  min="1"
                  max="999"
                  value={this.state.arvontakerrat}
                  onChange={this.nappaaArvontakerrat}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalArvostelukohdat">
              <Col componentClass={ControlLabel} sm={2}>
                Arvostelukohdat (väh. 5)
              </Col>
              <Col sm={9}>
                <FormControl
                  type="number" 
                  min="5"
                  max="999"
                  value={this.state.arvostelukohdat}
                  onChange={this.nappaaArvostelukohdat}
                />
              </Col>
            </FormGroup>


            <FormGroup controlId="formHorizontalOsallistujat">
              <Col componentClass={ControlLabel} sm={2}>
                Osallistujat
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass="textarea" 
                  rows="10" 
                  placeholder="osallistujat"
                  value={this.state.osallistujat}
                  onChange={this.nappaaOsallistujat}
                />
              </Col>
            </FormGroup>


            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Arvo tulokset
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </Grid>
      </div>
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
