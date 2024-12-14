import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AlbumCard from "./components/cards/cards";
import Section from "./components/Section/section";
import TopAlbumsSection from "./components/album/album";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Section
          title="Top Albums"
          apiUrl="https://qtify-backend-labs.crio.do/albums/top"
          alias="getTopAlbums"
        />

        {/* New Albums Section */}
        <Section
          title="New Albums"
          apiUrl="https://qtify-backend-labs.crio.do/albums/new"
          alias="getNewAlbums"
        />
        <Section
          title="Songs"
          apiUrl="https://qtify-backend-labs.crio.do/songs"
          isSongsSection={true}
        />
      </div>
    </Router>
  );
}

export default App;
