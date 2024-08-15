import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Background from './components/landing/background'

import './App.css';
import Navbar from './components/general/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Router exact path="/" components={Background} /> */}
        
      </div>
    </Router>
  );
}

export default App;
