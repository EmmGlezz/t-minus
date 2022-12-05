import React from 'react';
import './Launch.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './Timer';
import { format } from 'date-fns';

const Launch = ({name, company, location, image, deadline}) => {
    // const date = (deadline) => {
    //     return format(deadline, 'yyyy/MM/dd kk:mm:ss');
    // }
    return (
        <Container className=' bg-navy light-gray ma2 bw2 shadow-5 w-800'>
            <Row className='flex items-center'>
                <Col className=''>
                    <img className='' alt='#' src={image} />
                </Col>
                <Col>
                    <div className='tc items-center'>
                        <h1>{name}</h1>
                        <p>{company}</p>
                        <p>{location}</p>
                        <div>
                            <Timer deadline={deadline}/>
                            <h5>{format(Date.parse(deadline), 'dd/MM/yyyy, kk:mm:ss')}</h5>
                        </div>
                        <div className='flex justify-center'>
                            <a href='google.com' className='pa3 mr2'>
                                <p>WATCH</p>
                            </a>
                            <a href='google.com' className='pa3 mr2'>
                                <p>MORE INFO</p>
                            </a>
                            <a href='google.com' className='pa3 mr2'>
                                <p>SHARE</p>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Launch;