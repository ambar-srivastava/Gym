import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Poster from './Components/Poster/Poster';
import About from './Components/About/About';
import Contents from './Components/Contents/Contents';
import Programs from './Components/Programs/Programs';
import Appointments from './Components/Appointments/Appointments';
import Live from './Components/Live/Live';

const App = () => {
  return (
    <>
      <NavBar/>
      <Poster/>
      <About/>
      <Contents/>
      <Programs/>
      <Appointments/>
      <Live/>
    </>
  )
}

export default App;
