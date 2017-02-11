import React, { Component } from 'react';
import Tulos from './Tulos'

class Tulokset extends Component {
  render() {
    const tulosLista = this.props.tulosLista;

    return (
      <div className="Tulokset">
        {tulosLista ?  this.naytaTulokset() : "Ei tuloksia"}
      </div>
    );
  }

  naytaTulokset(){
    return this.props.tulosLista.map((tulos, index) =>
      <Tulos 
        key={index} 
        tulos={tulos}
        boldattu={this.props.boldattu}
        brTagi={this.props.brTagi}
        sijoittuneet={this.props.sijoittuneet} 
      />
    );
  }
}

export default Tulokset;
