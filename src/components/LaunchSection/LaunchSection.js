import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox';
import LaunchList from './LaunchList';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {TfiViewList} from 'react-icons/tfi';
// import {BiFilterAlt} from 'react-icons/bi'

import './LaunchSection.css'

const LaunchSection = ({launches}) => {
  const [searchField, setsearchField] = useState('')
  const [isGrid, setIsGrid] = useState(true)

  
  
  const onSearchChange = (event) => {
    setsearchField(event.target.value)
    
  }


  const filteredLaunches = launches.filter(launch => {
    return launch.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return (
    <div className='flex flex-column items-center launchSection'>
      
        <div className='title_box flex flex-column justify-content-center align-items-center pt-5'>
          <h1 className='f1 launch-section-title'>Upcoming Launches</h1>
          <Row className='filter_box flex align-items-center mb-2 w-75 p-0'>
            <Col className='col-12 col-md-10'>
            <SearchBox searchChange={onSearchChange}/>
            </Col>
            <Col className='col-12 col-md-2 flex justify-content-center align-items-center'>
              <Button>Clear</Button>
              {/* <Button className='flex align-items-center'><BiFilterAlt /> Filter</Button> */}
            </Col>
          </Row>
          <Row className='w-75 flex justify-content-start'>
            <Col className='flex'>
              <DropdownButton id="dropdown-basic-button" title="Provider" className='mx-2'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Location" className='mx-2'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Rocket" className='mx-2'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </div>
        <div>
          <div className='flex justify-content-end button_views'>
            <Button className='mx-2 inline-flex justify-content-center align-items-center button_color' onClick={() => setIsGrid(true)}><BsGrid3X3Gap /></Button>
            <Button className='mx-2 inline-flex justify-content-center align-items-center button_color' onClick={() => setIsGrid(false)}><TfiViewList /></Button>
          </div>
          <LaunchList launches={filteredLaunches} isGrid={isGrid}/>
        </div>
    </div>
  )
}

export default LaunchSection