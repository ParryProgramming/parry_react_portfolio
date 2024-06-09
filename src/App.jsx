import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import mainImage from '../src/images/profile.jpeg'; // replace with your image file path

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <img src={mainImage} alt="Main" /> {/* This line adds the image */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;