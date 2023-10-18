import React from 'react'
import { useMode } from './Context/Mode'
// import bookimg from '../images/book-stack.png'
import pcimg from'../images/programming.png'

const Hero = () => {
  const [lm]=useMode()
  
  return (
    <div 
     className='hero'>
      <div style={{backgroundColor:lm?"hsl(0, 0%, 97%)":"hsl(0, 0%, 25%)"}}
      className='hero-left'>
        {/* <img src={bookimg} alt="" /> */}
        <img src={pcimg} alt="" />
      </div>
      <div
      style={{backgroundColor:lm?"rgba(111, 220, 191, 0.9)":"hsl(257, 8%, 18%)",color:lm?"hsl(0, 0%, 25%)":"#fafafa"}}  
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
