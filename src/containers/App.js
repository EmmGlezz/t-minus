import React, { Component } from 'react';
import './App.css';
import LaunchList from '../components/LaunchList';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

// import Obj from './devtest.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      launches: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming').then(response => {
      return response.json();
    }).then(launchCount => {
      this.setState({launches: launchCount.results})
    });
  }

  
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    
  }


  render() {
    const filteredLaunches = this.state.launches.filter(launch => {
      return launch.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='bg-light-gray'>
        <NavBar />
        <div className='flex flex-column items-center'>
          <h1 className='f1'>Upcoming Launches</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <LaunchList launches={filteredLaunches}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
