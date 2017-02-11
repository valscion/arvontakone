import React, { Component, PropTypes } from 'react';

class Tulos extends Component {
  static propTypes = {
    tulos: PropTypes.arrayOf(PropTypes.string),
    boldattu: PropTypes.bool,
    brTagi: PropTypes.bool,
    sijoittuneet: PropTypes.number
  }

  render() {
return <pre>{JSON.stringify(this.props, null, 2)}</pre>

    // return (
    //   <div>{this.props.tulos.map((tulos, index)=>
    //     <div key={index}>{tulos}</div>
    //   )}</div>
    // );
  }

}

export default Tulos;
