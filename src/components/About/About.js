import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './About.css'

const About = () => {
  return (
    <Container fluid className='about'>
      <Row className='align-items-center p-5'>
        <Col className='col-lg-6 col-md-6 order-2 order-md-1 mt-4  mt-sm-0 opt-sm-0'>
          <Row className="align-items-center">
              <Col className="col-lg-6 col-md-6 col-6">
                  <Row className="row">
                      <Col className="col-lg-12 col-md-12 mt-4 pt-2">
                          <Card className="work-desk rounded border-0 shadow-lg overflow-hidden">
                              <img src="/images/launch.jpg" class="img-fluid" alt="Image1" />
                              <div className="img-overlay bg-dark"></div>
                          </Card>
                      </Col>
                  </Row>
              </Col>

              <Col className="col-lg-6 col-md-6 col-6">
                  <Row className="row">
                      <Col className="col-lg-12 col-md-12">
                          <Card className="work-desk rounded border-0 shadow-lg overflow-hidden">
                              <img src="/images/Stationery.jpg" className="img-fluid" alt="Image2" />
                              <div className="img-overlay bg-dark"></div>
                          </Card>
                      </Col>

                      <Col className="col-lg-12 col-md-12 mt-4 pt-2">
                          <Card className="work-desk rounded border-0 shadow-lg overflow-hidden">
                              <img src="/images/Landing.jpg" className="img-fluid" alt="Image3" />
                              <div className="img-overlay bg-dark"></div>
                          </Card>
                      </Col>
                  </Row>
              </Col>
            </Row>
        </Col>
        <Col className='col-lg-6 col-md-6 col-12 order-1 order-md-2'>
        <div className="section-title ml-lg-5">
                <h5 className="text-custom font-weight-normal mb-3">About <span>T-MINUS</span></h5>
                <h4 className="title mb-4">
                  Stay up-to-date <br />
                  with rocket launches.
                </h4>
                <p className="text-muted mb-0">T-MINUS is a website that allows you to easily keep track of upcoming rocket launches around the world. 
                 Whether you're a space enthusiast or just curious about the latest developments in space technology, 
                 T-MINUS provides you with all the information you need in one place. With a clean and user-friendly 
                 interface, you can filter launches by date, location, and rocket type, and get detailed information 
                 about each launch, including the launch site, mission details, and live streaming links. <br />
                  So why wait? 
                 Join us on a journey to the stars with T-MINUS!</p>

                <div className="row">
                    <div className="col-lg-6 mt-4 pt-2">
                        <div className="media align-items-center rounded shadow p-3">
                            <i className="fa fa-play h4 mb-0 text-custom"></i>
                            <h6 className="ml-3 mb-0 text-light">Up-to-date data</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                        <div className="media align-items-center rounded shadow p-3">
                            <h6 className="ml-3 mb-0 text-light">Launch status</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                        <div className="media align-items-center rounded shadow p-3">
                            <h6 className="ml-3 mb-0 text-light">Rocket details</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                        <div className="media align-items-center rounded shadow p-3">
                            <h6 className="ml-3 mb-0 text-light">Countdown timer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
    // <div className='about'>
    //     <div>
    //         <h2>About <span>T-MINUS</span></h2>
    //     </div>
    //     <div className='info'>
    //         <p>T-MINUS is a website that allows you to easily keep track of upcoming rocket launches around the world. 
    //             Whether you're a space enthusiast or just curious about the latest developments in space technology, 
    //             T-MINUS provides you with all the information you need in one place. With a clean and user-friendly 
    //             interface, you can filter launches by date, location, and rocket type, and get detailed information 
    //             about each launch, including the launch site, mission details, and live streaming links. So why wait? 
    //             Join us on a journey to the stars with T-MINUS!</p>
    //         <img src='/images/rocket-engine.jpg' alt='Rocket Engine' width='400px'/>
    //     </div>
    // </div>
  )
}

export default About