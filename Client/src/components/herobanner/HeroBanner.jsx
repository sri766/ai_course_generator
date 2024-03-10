import React from 'react'
import './HeroBanner.scss'


const HeroBanner = () => {
  return (
    <div className='herobanner'>
        <div className='herobanner_content'>
            <h1 className='herobanner_title'>Welcome to Learn Dev</h1>
            <p className='herobanner_subtitle'>Learn to code by watching others</p>
            <button className='herobanner_btn'>Get Started</button>
        </div>
    </div>
  )
}

export default HeroBanner
