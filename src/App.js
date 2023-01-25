import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cześć Kocham Pieski 2!!!!!. Ta strona jest uruchamiana przez pipeline jenkinsa
           na 13.73.148.81:8080  OCB </h1>
        </header>
        <p className="App-intro">
          Celem projektu jest przygotowanie i prezentacja utwardzonego (poprawnie zabezpieczonego) systemu do automatycznego budowania, testowania i wdrażania aplikacji w oparciu o narzędzia Jenkins, Github i Docker.
        </p>
      </div>
    );
  }
}

export default App;
