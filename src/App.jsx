import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import mainImage from '../src/images/profile.jpeg';
import Bio from './components/Bio';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="main-content">
        <img src={mainImage} alt="Main" />
        <Bio />
      </div>
      <Project />
      <Footer />
    </div>
  );
}

export default App;