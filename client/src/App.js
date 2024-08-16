import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/landing/background';
import './App.css';
import Navbar from './components/general/NavBar';
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/register" element={< Register/>} />
          <Route path="/login" element={< Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
