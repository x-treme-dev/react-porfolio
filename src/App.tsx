import React from 'react';
import './reset.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <>
      <Home/> 
      <About/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
    </>
  );
}

export default App;
