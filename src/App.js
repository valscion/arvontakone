import React, { Component } from 'react';
import './App.css';
import Tiedot from './Tiedot';
import Arvonta from './Arvonta';
import Tulokset from './Tulokset';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h2>Arvontakone</h2>
        </div>
        <Tiedot />
        <Arvonta />
        <Tulokset />
      </div>
    );
  }
}

export default App;
