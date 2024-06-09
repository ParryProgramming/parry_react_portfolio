// App.jsx
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import mainImage from '../src/images/profile.jpeg'; 
import Bio from './components/Bio'; // import the Bio component

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <img src={mainImage} alt="Main" />
      <Bio /> {Bio}
      <Project />
      <Footer />
    </div>
  );
}

export default App;