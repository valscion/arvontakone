import React, { Component } from 'react';
import {Form, FormGroup, Col, Checkbox} from 'react-bootstrap';
import './ListaTuloslistoista.css';
import TulosLista from './TulosLista'

class ListaTuloslistoista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brTagi: false,
      boldattu: false
    };
  }

  render() {
    const tulosLista = this.props.tulosLista;

    return (
      <div className="tulokset">

      <Form inline>
        <FormGroup controlId="formInlineCheckboxes">
          <Col sm={12}>
            <span className="inlineCheckbox">
              <Checkbox checked={this.state.brTagi} onChange={this.nappaaBrTagi}> Lisää {"<br />"}-tagit</Checkbox>
            </span>
            <span className="inlineCheckbox">
              <Checkbox checked={this.state.boldattu} onChange={this.nappaaBoldattu}> Lihavoi sijoittuneet</Checkbox>
            </span>
          </Col>
        </FormGroup>
      </Form>

        {tulosLista ?  this.naytaTulokset() : "Ei tuloksia"}
      </div>
    );
  }

  nappaaBrTagi = (event) => {
    this.setState({brTagi: event.target.checked});
  }

  nappaaBoldattu = (event) => {
    this.setState({boldattu: event.target.checked});
  }


  naytaTulokset(){
    return this.props.tulosLista.map((tulos, index) =>
      <div key={index}>
        <h2>Tulos {index+1}</h2>
        <TulosLista 
          tulos={tulos}
          boldattu={this.state.boldattu}
          brTagi={this.state.brTagi}
          sijoittuneet={this.props.sijoittuneet} 
        />
      </div>
    );
  }
}



export default ListaTuloslistoista;
