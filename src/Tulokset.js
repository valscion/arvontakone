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
      <div key={index}>
        <h2>Tulos {index+1}</h2>
        <Tulos 
          tulos={tulos}
          boldattu={this.props.boldattu}
          brTagi={this.props.brTagi}
          sijoittuneet={this.props.sijoittuneet} 
        />
      </div>
    );
  }
}

export default Tulokset;
