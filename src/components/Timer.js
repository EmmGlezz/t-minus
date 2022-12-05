import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Timer.css';

const Timer = ({deadline}) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // const deadline = "31, December, 2022";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <Container className="timer" role="timer">
            <Row>
                <Col className="col-3">
                    <div className="box">
                    <p id="day">{days < 10 ? "0" + days : days}</p>
                    <span className="text">Days</span>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="box">
                    <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
                    <span className="text">Hours</span>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="box">
                    <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                    <span className="text">Minutes</span>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="box">
                    <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                    <span className="text">Seconds</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Timer;