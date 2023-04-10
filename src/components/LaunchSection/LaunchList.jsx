import React from "react";
import Launch from "./Launch";
import LaunchListedFormat from "./LaunchListedFormat";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LaunchList = ({ launches, isGrid }) => {
	return (
		<Container fluid className='launchList mt-5'>
			<Row>
				{launches.map((launch, i) => {
					return isGrid ? (
						<Col
							className='col-12 col-lg-6 col-xl-4 my-4'
							style={{ minHeight: "1000px" }}
						>
							<Launch
								key={i}
								name={launch.name}
								company={launch.launch_service_provider.name}
								location={launch.pad.location.name}
								image={launch.image}
								deadline={launch.net}
								status={launch.status.name}
							/>
						</Col>
					) : (
						<Col
                            className="col-12 my-4"
                        >
							<LaunchListedFormat
								key={i}
								name={launch.name}
								company={launch.launch_service_provider.name}
								location={launch.pad.location.name}
								image={launch.image}
								deadline={launch.net}
								status={launch.status.name}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default LaunchList;
