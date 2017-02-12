import React, { Component } from 'react';

export default class RatsukonTulos extends Component{
  render(){
    
    let prosentti = "(ei pisteitä)";

    if(this.props.pisteet && this.props.pisteet.length){
      const lkm = this.props.pisteet.length;
      const summa = this.props.pisteet.reduce((prev,curr) => prev + curr, 0);
      const tulos = ((summa/(lkm*10)));
      prosentti = "(" + tulos.toLocaleString('fi-FI', {style:'percent', minimumFractionDigits: 1}) + ")";
    }

    return (
      <div>
        <StrongLisays lisaaStrong={this.props.boldattu && this.props.sijoittunut}>
          {this.props.sijoitus}. {this.props.ratsukko} {prosentti}{this.props.brTagi && '<br />'}
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
