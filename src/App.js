import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components1/Home.js'
import Workspace from './Components1/Workshop.js'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/workshop' element={ <Workspace />} />
      
    </Routes>
  )
}

export default App
