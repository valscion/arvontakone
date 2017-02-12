import React, { Component } from 'react';

export default class RatsukonTulos extends Component{
  render(){
    return (
      <div>
        <StrongLisays lisaaStrong={this.props.boldattu && this.props.sijoittunut}>
          {this.props.sijoitus}. {this.props.ratsukko} {laskeJaMuotoileProsentti(this.props.pisteet)}{this.props.brTagi && '<br />'}
        </StrongLisays>
      </div>
    );
  }
}

function StrongLisays(props) {
  if (props.lisaaStrong) {
    return <div>{'<strong>'}{props.children}{'</strong>'}</div>;
  } else {
    return <div>{props.children}</div>;
  }
}

function laskeJaMuotoileProsentti(pisteet){
  if(pisteet && pisteet.length){
    const lkm = pisteet.length;
    const summa = pisteet.reduce((prev,curr) => prev + curr, 0);
    const tulos = ((summa/(lkm*10)));
    return "(" + tulos.toLocaleString('fi-FI', {style:'percent', minimumFractionDigits: 1}) + ")";
  }

  return "(ei pisteitä)";
}
