import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Contact from './components/Contact.jsx';
import Footer from '../src/components/Footer.jsx';
import Project from '../src/components/Project.jsx';
import Header from '../src/components/Header.jsx';
import Navigation from '../src/components/Navigation.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);