import React from 'react';
import Header from './Components/header/header';
import './App.css';
import Banner1 from './Components/Banner1/banner1';
import Banner3 from './Components/banner3/Banner3';
import Advantage from './Components/advantage/Advantage';
import Develop from './Components/develop/Develop';
import VirtualPlatform from './Components/virtualPlatform/VirtualPlatform';
import Features from './Components/features/Features';
import RegisterNow from './Components/registerNow/RegisterNow';
function App() {
  return (
    <div style={{height:'5500px', width:"100%"}} className="App">
      <Header />
      <Banner1 />
      <Banner3 />
      <Advantage />
      <Features />
      <Develop />
      <VirtualPlatform/>
      <RegisterNow/>
    </div>
  );
}

export default App;
