import React, { Component, PropTypes } from 'react';
import RatsukonTulos from './RatsukonTulos';

class TulosLista extends Component {
  static propTypes = {
    tulos: PropTypes.arrayOf(PropTypes.object),
    boldattu: PropTypes.bool,
    brTagi: PropTypes.bool,
    sijoittuneet: PropTypes.number
  }

  render() {
    return (
      <div>
        {this.props.tulos.map((ratsukonTulos, index)=>
          <RatsukonTulos key={index} 
            ratsukko={ratsukonTulos.ratsukko}
            pisteet={ratsukonTulos.pisteet}
            brTagi={this.props.brTagi}
            boldattu={this.props.boldattu}
            sijoitus={index+1}
            sijoittunut={(index < this.props.sijoittuneet)}
          />
        )}
      </div>
    );
  }

}

export default TulosLista;
