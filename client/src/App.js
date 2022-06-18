import React from 'react'
import { Container } from '@material-ui/core';

import './style.css'
// components
import Header from './components/common/header/Header'
import HeroComponent from './components/hero/HeroComponent';
import About from './components/about/About';

import img1 from "./images/female-doctor-with-presenting-hand-gesture.jpg"
import img2 from "./images/medium-shot-man-getting-vaccine.jpg"

function App() {
  return (
    <Container>
      <Header />
      <HeroComponent />
      <About />

      <div className="images-app">
        <img src={img1} />
        <img style={{marginLeft: "2rem"}} src={img2} />
      </div>
    </Container>
  );
}

export default App
