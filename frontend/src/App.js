import React from 'react';
import './App.css';
import './Button.js';
import { Navbar } from './Navbar.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;

