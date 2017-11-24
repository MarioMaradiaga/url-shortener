import React, { Component } from 'react';
import URLShortener from './components/URLShortener'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <URLShortener />
      </div>
    );
  }
}

export default App;
