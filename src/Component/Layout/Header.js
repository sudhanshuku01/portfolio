import React, { useState } from 'react'
import { useMode } from '../Context/Mode'
import menuimg from '../../images/menu.png'
import { Link } from 'react-router-dom'
const Header = () => {
  const [lm,setLm]=useMode()
  const [ulht,setUlht]=useState('0px')

  return (
    <div className='header'>
        <div className='header-title'>
          <img
          style={{border:ulht==='0px'?'none':'2px solid grey',filter:lm?"none":"invert(1)"}}
           onClick={()=>ulht==='0px'?setUlht('fit-content'):setUlht('0px')} className='menu-icon' src={menuimg} alt="" />
          <h1 style={{color:lm?"rgba(64, 64, 64, 0.99)":"#3bcc82"}}>Sudhanshu</h1>
        </div>
        <ul style={{height:ulht}} className='header-ul'>
          <li><Link style={{color:lm?"black":"white"}} to="/#">workspace</Link></li>
          <li><Link style={{color:lm?"black":"white"}} to="/#">connect</Link></li>
          <li><Link style={{color:lm?"black":"white"}} to="/#">about</Link></li>
          <li><Link style={{color:lm?"black":"white"}} to="/#">blog</Link></li>
        </ul>
        <label className="header-switch">
           <input onChange={()=>setLm(!lm)} type="checkbox" />
           <span className="slider"></span>
        </label>
    </div>
  )
}

export default Header
