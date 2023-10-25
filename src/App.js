import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components1/Home.js'
import Workspace from './Components1/Workshop.js'
import Connect from './Components1/Connect.js'
import About from './Components1/About.js'
import Games from './Components1/Games.js'
import TicTacToe from './Components1/TicTacToe.js'
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/workshop' element={ <Workspace />} />
      <Route path='/connect' element={ <Connect />} />
      <Route path='/about' element={ <About />} />
      <Route path='/game' element={ <Games />} />
      <Route path='/game/tic-tac-toe' element={ <TicTacToe />} />

    </Routes>
  )
}

export default App
