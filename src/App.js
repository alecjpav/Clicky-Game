import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header.js';
import Instructions from './components/Instructions/instructions.js';
import GameArea from './components/GameArea/gameArea.js';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <GameArea />
      </div>
    );
  }
}

export default App;
