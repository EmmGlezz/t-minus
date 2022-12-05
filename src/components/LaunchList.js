import React from 'react';
import Launch from './Launch';

const LaunchList = ({ launches }) => {
    return (
        <div>
            {/* <Launch name={launches.results[0].name} company={launches.results[0].launch_service_provider.name} location={launches.results[0].pad.location.name}/> */}
            {
                launches.map((launch, i) => {
                    return (<Launch
                    key={i}
                    name={launch.name}
                    company={launch.launch_service_provider.name}
                    location={launch.pad.location.name}
                    image={launch.image}
                    deadline={launch.net}
                    />)
                })
            }
        </div>
    );
}


export default LaunchList;