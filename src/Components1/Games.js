import React from 'react'
import Layout from './Layout/Layout'
import tictactoeimg from '../images/tic-tac-toe_806131.png'
// import snakeimg from '../images/snake.png'
// import chessimg from '../images/chessimg.png'
import flappybirdimg from '../images/flappybird.png'
import { useMode } from './Context/Mode'
import { useNavigate } from 'react-router-dom'
const Games = () => {
  const [lm]=useMode()
  const navigate=useNavigate()
  
  const GamesArray=[
    [tictactoeimg,"TicTacToe",'tic-tac-toe'],
    // [snakeimg,"Snake",'snake'],
    // [chessimg,"Chess",'chess'],
    [flappybirdimg,"FlappyBird",'flappy-bird'],
  ]   

  return (
    <Layout
    title="Online Games 🎮 | Play Now !"
    >
       <div
        style={{background:lm?'#fef8b4':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}}
        className='game'>
        {
          GamesArray.map((game,index)=>(
            <div onClick={()=>navigate(`/game/${game[2]}`)} key={index} className='game-item'>
            <img src={game[0]} alt={game[1]+'icon'} />
            <p>{game[1]}</p>
          </div>
          ))
        }
       </div>
    </Layout>
  )
}

export default Games
