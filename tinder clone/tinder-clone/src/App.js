import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js'
function App() {
  return (
    // BEM class convention
    <div className="app">
      <Router>
      <Header />
      <TinderCards/>
      <SwipeButtons/>
      </Router>
    </div>
  );
}

export default App;
