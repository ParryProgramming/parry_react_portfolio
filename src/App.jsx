//importing necessary modules and components
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import mainImage from '../src/images/profile.jpeg';
import Bio from './components/Bio';
import './App.css'; 

//app component
function App() {
  return (
    //wrapping all components inside a div with a class of App
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

//exporting the App component to be used in other parts of the application
export default App;