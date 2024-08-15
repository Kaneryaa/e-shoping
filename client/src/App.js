import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/general/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Hello World</h1>
      </div>
    </Router>
  );
}

export default App;
