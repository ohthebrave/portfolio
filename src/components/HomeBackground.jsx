import React from 'react';
import setup from '../assets/setup.jpeg'

function HomeBackground() {
  return (
    <div className='text-white page'>
        <div className='intro'>
            <img src={setup} alt="setup-img" />
        </div>
        <div className='content'>
            <p className='fs-5 pb-5'>Hello there, <br/>I'M GEORGE NYANJUI</p>
            <h2 className='fs-1 fw-bolder'>As a Seasoned Developer, I’m passionate about solving problems.</h2>
        </div>
    </div>
  )
}

export default HomeBackground