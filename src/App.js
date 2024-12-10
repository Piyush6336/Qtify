import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AlbumCard from './components/cards/cards';
import Section from './components/Section/section';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
      </div>
    </Router>
        
    
  );
}

export default App;
