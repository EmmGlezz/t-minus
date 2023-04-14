import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Cover from '../components/Cover/Cover';
import About from '../components/About/About';
import LaunchSection from '../components/LaunchSection/LaunchSection';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';



const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [launches, setLaunches] = useState([])

  useEffect(()  => {
    getLaunches();
  }, [])

  const getLaunches = async () => {
    const response = await fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming?limit=20');
    const data = await response.json();
    setLaunches(data.results);
    console.log(data.results)
    setLoaded(true)
  }

  return !loaded ? (
    <Loading />
  ) : (
      <div className=''>
        <NavBar />
        <Cover />
        <About />
        <div className='separator'></div>
        <LaunchSection launches={launches} />
        <Footer />
      </div>
    );
  
}

export default App;
