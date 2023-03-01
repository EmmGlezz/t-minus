import React from 'react';
import './Launch.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './Timer/Timer';
import { format } from 'date-fns';

const Launch = ({name, company, location, image, deadline, status}) => {
    // const date = (deadline) => {
    //     return format(deadline, 'yyyy/MM/dd kk:mm:ss');
    // }
    return (
        <Container className='launch light-gray  bw2 shadow-5 br4 pa3'>
            
            <Row className=''>
                <Col className='col-md-4'>
                    <img className='object-fit-cover rounded' alt='#' src={image} height='100%' width='100%'/>
                </Col>
                <Col className='col-md-8'>
                    <div className='tc items-center launch-text'>
                        <h1>{name}</h1>
                        <p>{company}</p>
                        <p>{location}</p>
                        <div>
                            <Timer deadline={deadline}/>
                            <h5>{format(Date.parse(deadline), 'dd/MM/yyyy, kk:mm:ss')}</h5>
                        </div>
                        <div className='flex flex-column justify-center'>
                            <p>STATUS</p>
                            <p className='f4'>{status}</p>
                            {/* <a href='google.com' className='pa3 mr2'>
                                <p>WATCH</p>
                            </a>
                            <a href='google.com' className='pa3 mr2'>
                                <p>MORE INFO</p>
                            </a>
                            <a href='google.com' className='pa3 mr2'>
                                <p>SHARE</p>
                            </a> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Launch;