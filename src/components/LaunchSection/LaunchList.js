import React from 'react';
import Launch from './Launch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LaunchList = ({ launches }) => {
    return (
        <Container fluid className='launchList'>
            <Row>
            {/* <Launch name={launches.results[0].name} company={launches.results[0].launch_service_provider.name} location={launches.results[0].pad.location.name}/> */}
            {
                launches.map((launch, i) => {
                    return (<Col className='col-6' style={{height: '600px'}}>
                    <Launch
                    key={i}
                    name={launch.name}
                    company={launch.launch_service_provider.name}
                    location={launch.pad.location.name}
                    image={launch.image}
                    deadline={launch.net}
                    status={launch.status.name}
                    />
                    </Col>)
                })
            }
            </Row>
        </Container>
    );
}


export default LaunchList;