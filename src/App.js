import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Section1/Menu';
import Local from './Section1/Local';
import GoodFood from './Component/GoodFood';

function App() {
  return (
    <React.Fragment>


    <Navbar />
    <GoodFood />
    <Menu />
    <Local />



    </React.Fragment>
      
    
  );
}

export default App;
