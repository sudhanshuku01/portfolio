import React, { useState } from 'react'
import { useMode } from './Context/Mode'

const Hero = () => {
  const [lm,setLm]=useMode()
  
  return (
    <div 
     className='hero'>
      <div style={{backgroundColor:lm?"rgba(111, 220, 191, 0.9)":"hsl(237, 18%, 23%)"}}  
      className='hero-left'>
        {/* <img src={wrkimg} alt="" /> */}
      </div>
      <div
      style={{backgroundColor:lm?"hsl(0, 0%, 97%)":"hsl(0, 0%, 25%)",color:lm?"black":"white"}}
       className='hero-right'>
        <div className='hero-right-content'>
           <p>👋Hi,I'm sudhanshu</p>
           <h1>I like making <br />fun, <br />
             interactive things with code. I also talk & write about those things.
           </h1>
           <button>Learn More</button>
       </div>
      </div>
    </div>
  )
}

export default Hero
