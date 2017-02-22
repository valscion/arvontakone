import React, { Component, PropTypes } from 'react';
import './RatsukonTulos.css';

export default class RatsukonTulos extends Component{
  static propTypes = {
    ratsukko: PropTypes.string.isRequired,
    pisteet: PropTypes.arrayOf(PropTypes.number).isRequired,
    boldattu: PropTypes.bool.isRequired,
    brTagi: PropTypes.bool.isRequired,
    naytaProsentti: PropTypes.bool,
    naytaPisteet:  PropTypes.bool,
    sijoittunut: PropTypes.bool.isRequired,
    sijoitus: PropTypes.number.isRequired
  }

  render(){
    return (
      <div className={this.props.sijoittunut && 'RatsukonTulos-sijoittunut'}>
        <StrongLisays lisaaStrong={this.props.boldattu && this.props.sijoittunut}>
          {this.props.sijoitus}. {this.props.ratsukko} {laskeJaMuotoileProsentti(this.props.pisteet, this.props.naytaProsentti, this.props.naytaHylatyt)} {this.props.naytaPisteet && naytaPisteet(this.props.pisteet)}
        </StrongLisays>
        {this.props.brTagi && '<br />'}
      </div>
    );
  }
}

function StrongLisays(props) {
  if (props.lisaaStrong) {
    return <span>{'<strong>'}{props.children}{'</strong>'}</span>;
  } else {
    return <span>{props.children}</span>;
  }
}

function laskeJaMuotoileProsentti(pisteet, naytaProsentti, naytaHylatyt){
  if(pisteet && pisteet.length){
    const lkm = pisteet.length;
    const summa = pisteet.reduce((prev,curr) => prev + curr, 0);
    const tulos = ((summa/(lkm*20)));

    if(naytaProsentti){
      if(naytaHylatyt && tulos < 0.5){
        return "(hylätty)";
      } 
      return "(" + tulos.toLocaleString('fi-FI', {style:'percent', minimumFractionDigits: 3}) + ")";
    } else{
      return "";
    }
  }

  return "(ei pisteitä)";
}

function naytaPisteet(pisteet){
  return pisteet.map(piste => piste / 2).join(' / ');
}
