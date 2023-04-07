import React from 'react'

import './Loading.css'

const stars = () => {
    let count = 50;
    let starsList = [];
    let i = 0;
    while (i < count) {
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;
        starsList.push(<i style={{
            left: `${x}px`,
            width: `1px`,
            height: `1${h}px`,
            animationDuration: `${duration}s`,
        }}></i>)
        i++
    }
    return starsList
}

console.log(stars())

const Loading = () => {
  return (
    <div className='scene d-flex flex-column'>
        {stars().map((Star, key) => (
            <div key={key}>{Star}</div>
        ))}
        <h1 className='text-white absolute'>Loading</h1>
        <div className='rocket'>
            <img src='/images/rocket.png' alt='Rocket icon' />
        </div>
    </div>
  )
}

export default Loading