import React from 'react'
import { useMode } from '../Context/Mode'

const Header = () => {
  const [lm,setLm]=useMode()
  return (
    <div className='header'>
        <div className='header-title'>
          <h1 style={{color:lm?"rgba(64, 64, 64, 0.99)":"hsl(55, 97%, 85%)"}}>Sudhanshu</h1>
        </div>
        <ul className='header-ul'>
          <li><a style={{color:lm?"black":"white"}} href="/#">workshop</a></li>
          <li><a style={{color:lm?"black":"white"}} href="/#">contact</a></li>
          <li><a style={{color:lm?"black":"white"}} href="/#">speaking</a></li>
          <li><a style={{color:lm?"black":"white"}} href="/#">project</a></li>
        </ul>
        <label className="header-switch">
           <input onChange={()=>setLm(!lm)} type="checkbox" />
           <span className="slider"></span>
        </label>
    </div>
  )
}

export default Header
