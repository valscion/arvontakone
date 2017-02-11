import React, { Component } from 'react';
import './App.css';
import Tiedot from './Tiedot';
import Arvonta from './Arvonta';
import Tulokset from './Tulokset';
import {Grid} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: null,
    };
  }

  render() {
    return (
      <div>
        <Grid>       
          <Tiedot />
          <Arvonta nappaaArvot={this.nappaaArvot}/>
          <Tulokset 
            tulosLista={this.state.lista} 
            boldattu={this.state.boldattu}
            brTagi={this.state.brTagi}
            sijoittuneet={this.state.sijoittuneet}
          />
        </Grid>
      </div>
    );
  }

  nappaaArvot = (arvot) =>{
    console.log(arvot);
    const lista = [["uli", "ali", "oli", "woop"], ["ali", "uli", "oli", "woop"], ["oli", "uli", "ali", "woop"], ["woop", "oli", "uli", "ali"]];
    this.setState({lista: lista, boldattu: arvot.boldattu, brTagi: arvot.brTagi, sijoittuneet: 2});

  }

}

export default App;
