import React, { Component } from 'react';

export default class RatsukonTulos extends Component{
  render(){
    return (
      <div>
        <StrongLisays lisaaStrong={this.props.boldattu && this.props.sijoittunut}>
          {this.props.sijoitus}. {this.props.ratsukko}{this.props.brTagi && '<br />'}
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
