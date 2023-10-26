import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import { chess_char } from './utils/Chess'
const initialState=Array(8).fill(Array(8).fill({
    character:'',
    color:''
}))
const Chess = () => {
   const [gamestate,setGamestate]=useState(initialState);
   
   const startGame=()=>{
    const newState=[...gamestate]
    chess_char.forEach(arr=>{
        const [a,b,c,d]=arr;
        const newdata={
            character:a,
            color:d
        }
        console.log(newdata)
        newState[b][c]=newdata
    })
    setGamestate(newState)
    console.log(gamestate)
   }

   useEffect(()=>{  
   startGame()
    // eslint-disable-next-line
   },[])
  return (
   <Layout title="chess game | play now">
     <div className='chess'>
      <div className='chess-board'>
      {
        gamestate.map((row,rowindex)=>(
            row.map((col,colindex)=>(
                <div key={rowindex+colindex}>
                    {col.character}
                </div>
            ))
        ))
      }
      </div>   
    </div>
   </Layout>
  )
}

export default Chess
