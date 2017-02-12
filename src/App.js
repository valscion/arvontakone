import React, { Component } from 'react';
import './App.css';
import {Grid} from 'react-bootstrap';
import Tiedot from './Tiedot';
import Arvonta from './Arvonta';
import ListaTulosListoista from './ListaTulosListoista';
import arvoTulokset from './arvoTulokset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      boldattu: false,
      brTagi: true,
      sijoittuneet: 1
    };
  }

  render() {
    return (
      <div>
        <Grid>       
          <Tiedot />
          <Arvonta nappaaArvot={this.nappaaArvot}/>
          <ListaTulosListoista 
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
    const lista = Array(Number(arvot.arvontakerrat)).fill(0).map(() => {
      return arvoTulokset(arvot.osallistujat, Number(arvot.arvostelukohdat));  
    });
    
    this.setState({lista: lista, boldattu: arvot.boldattu, brTagi: arvot.brTagi, sijoittuneet: 1});
  }

}

export default App;
