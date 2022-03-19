import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlagsContainer from './FlagsContainer'
import dummyFlags from './dummyFlags'

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <div className="App-body">
        <FlagsContainer flags={dummyFlags} />
      </div>
    </div>
  );
}

export default App;
