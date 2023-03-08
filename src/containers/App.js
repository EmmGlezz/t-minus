import React from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Cover from '../components/Cover/Cover';
import About from '../components/About/About';
import LaunchSection from '../components/LaunchSection/LaunchSection';
import Footer from '../components/Footer/Footer';



const App = () => {
    return (
      <div className=''>
        <NavBar />
        <Cover />
        <About />
        <div className='separator'></div>
        <LaunchSection />
        <Footer />
      </div>
    );
  
}

export default App;
