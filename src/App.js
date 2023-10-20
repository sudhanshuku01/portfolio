import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components1/Home.js'
import Workspace from './Components1/Workshop.js'
import Connect from './Components1/Connect.js'
import Blog from './Components1/Blog.js'
import About from './Components1/About.js'
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/workshop' element={ <Workspace />} />
      <Route path='/connect' element={ <Connect />} />
      <Route path='/about' element={ <About />} />
      <Route path='/blog' element={ <Blog />} />

    </Routes>
  )
}

export default App
