import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MediaCard from './components/cards/cards';
import Section from './components/Section/section';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Section title="Top Albums" /> {/* Add the Section component */}
      </div>
    </Router>
        
    
  );
}

export default App;
