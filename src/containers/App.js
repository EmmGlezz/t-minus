import React from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Cover from '../components/Cover/Cover';
import About from '../components/About/About';
import LaunchSection from '../components/LaunchSection/LaunchSection';



const App = () => {
    return (
      <div className=''>
        <NavBar />
        <Cover />
        <About />
        <div className='separator'></div>
        <LaunchSection />
      </div>
    );
  
}

export default App;
