import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Poster from './Components/Poster/Poster';
import About from './Components/About/About';
import Contents from './Components/Contents/Contents';

const App = () => {
  return (
    <>
      <NavBar/>
      <Poster/>
      <About/>
      <Contents/>
    </>
  )
}

export default App;
