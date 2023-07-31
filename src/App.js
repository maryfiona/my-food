import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Section1/Menu';
import GoodFood from './Component/GoodFood';
import Inspire from './Section2/Inspire'

function App() {
  return (
    <React.Fragment>


    <Navbar />
    <GoodFood />
    <Menu />
    < Inspire />



    </React.Fragment>
      
    
  );
}

export default App;
