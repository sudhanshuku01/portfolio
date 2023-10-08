import React from 'react'
import ghimg from '../../images/github.png'
import instaimg from '../../images/instagram.png'
import ldnimg from '../../images/linkedin-logo.png'
import footimg from '../../images/peakpx-removebg-preview.png'
import { useMode } from '../Context/Mode'

const Footer = () => {
  const [lm,setLm]=useMode()
  return (
    <div style={{backgroundColor:lm?"rgba(111, 220, 191, 0.9)":"hsl(237, 18%, 23%)"}}  className='footer'>
      <div className='footer-info'>
        <h1 style={{color:lm?'black':'white'}}>I'm always up for chat</h1>
        <p><a style={{color:lm?'black':'white'}} href="/#">pop me an email</a></p>
        <div className='footer-info-socials'>
         <img style={{filter:lm?"none":"invert(1)"}}  src={ghimg} alt="" />
         <img style={{filter:lm?"none":"invert(1)"}} src={instaimg} alt="" />
         <img style={{filter:lm?"none":"invert(1)"}} src={ldnimg} alt="" />
        </div>
      </div>
      <div className='footer-image'>
        <img src={footimg} alt="" />
      </div>
    </div>
  )
}

export default Footer
