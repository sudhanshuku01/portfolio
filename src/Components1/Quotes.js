import React from 'react'
import quoteimg from '../images/right-quotes-symbol.png'
import { useMode } from './Context/Mode'
const Quotes = () => {
    const [lm]=useMode();
  return (
    <div style={{background:lm?'#fef8b4':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}} className='quotes'>
      <img style={{filter:lm?"none":"invert(1)"}} src={quoteimg} alt="new quotes" />
      <h1>"The mark of a mature programmer is a willingness to throw out code you spent time on when you realize it's pointless"</h1>
      <p style={{background:lm?'#404040':'#f7f7f7'}}></p>
    </div>
  )
}

export default Quotes
