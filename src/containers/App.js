import React, { useState, useEffect } from 'react';
import './App.css';
import LaunchList from '../components/LaunchList';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';



const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     launches: [],
  //     searchfield: ''
  //   }
  // }
  const [launches, setLaunches] = useState([])
  const [searchField, setsearchField] = useState('')

  useEffect(() => {
    fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming')
    .then(response => {
      return response.json();
    }).then(launchCount => {
      setLaunches(launchCount.results)
    });
  }, [])
  

  
  
  const onSearchChange = (event) => {
    setsearchField(event.target.value)
    
  }


  const filteredLaunches = launches.filter(launch => {
    return launch.name.toLowerCase().includes(searchField.toLowerCase());
  })

    return (
      <div className='bg-light-gray'>
        <NavBar />
        <div className='flex flex-column items-center'>
          <h1 className='f1'>Upcoming Launches</h1>
          <SearchBox searchChange={onSearchChange}/>
          <LaunchList launches={filteredLaunches}/>
        </div>
        
      </div>
    );
  
}

export default App;
