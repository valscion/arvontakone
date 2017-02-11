import React, { Component } from 'react';
import './App.css';
import Tiedot from './Tiedot';
import Arvonta from './Arvonta';
import Tulokset from './Tulokset';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>       
          <Tiedot />
          <Arvonta />
          <Tulokset />
        </Grid>
      </div>
    );
  }
}

export default App;
