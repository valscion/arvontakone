import React, { Component } from 'react';
import Tulos from './Tulos';

class Tulokset extends Component {
  render() {
    return (
      <div className="Tulokset">
        Tähän tulee tulokset
        <Tulos />
        <Tulos />
        <Tulos />
      </div>
    );
  }
}

export default Tulokset;
