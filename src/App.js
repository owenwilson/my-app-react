import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import EstadoUsuario from './components/EstadoUsuario';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <header className='App-header'>
      <EstadoUsuario />
      </header>
      </div>
    );
  }
}

export default App;
