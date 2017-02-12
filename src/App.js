import React, { Component } from 'react';
import './App.css';
import Tiedot from './Tiedot';
import Arvonta from './Arvonta';
import ListaTulosListoista from './ListaTulosListoista';
import {Grid} from 'react-bootstrap';


const ESIMERKKI = [
  [
    {
      ratsukko: "Uli - Uu",
      pisteet: [7,6,6]
    },
    {
      ratsukko: "Ali - Au",
      pisteet: [2,4,6,8]
    },
    {
      ratsukko: "Oli - Oo",
      pisteet: [0,3,6,9,4,9]
    }
  ],
  [
    {
      ratsukko: "Uli - Uu",
      pisteet: [0,1,2,3,10]
    },
    {
      ratsukko: "Ali - Au",
      pisteet: [5,3,4,1,8]
    },
    {
      ratsukko: "Oli - Oo",
      pisteet: [2,5,7,9,0]
    }
  ],
  [
    {
      ratsukko: "Uli - Uu",
      pisteet: [5,4,3,4,5]
    },
    {
      ratsukko: "Ali - Au",
      pisteet: [6,4,0,9,9]
    },
    {
      ratsukko: "Oli - Oo",
      pisteet: [7,6,6,5,5]
    }
  ]
] 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: ESIMERKKI,
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
    console.log(arvot);

    this.setState({lista: ESIMERKKI, boldattu: arvot.boldattu, brTagi: arvot.brTagi, sijoittuneet: 1});
  }

}

export default App;
