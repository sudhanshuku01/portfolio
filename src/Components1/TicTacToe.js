import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import reloadimg from "../images/reload.png";
import { useMode } from "./Context/Mode";
import useSound from "use-sound";
import gameoversound from "../images/gameover.wav";
import clicksound from "../images/click.wav";
import { rot_Arr } from "./utils/Rotation";

const checkWin = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      return i;
    }
  }
  return -1;
};

const TicTacToe = () => {
  const [play1] = useSound(clicksound);
  const [play2] = useSound(gameoversound);
  const [style,setStyle]=useState({
    width:'0px',
    left:'0px',
    top:'0px',
    transform:"translate(-50%,-50%) rotate(0deg)"
  })

  const [lm] = useMode();
  const [gamestate, setGamestate] = useState(Array(9).fill(""));
  const [xturn, setXturn] = useState(true);
  const [iswin, setIswin] = useState(false);

  const handleclick = (index) => {
    const nextList = [...gamestate];
    if (iswin || nextList[index] !== "") {
      return;
    }
    play1();
    nextList[index] = xturn ? "X" : "O";
    setGamestate(nextList);
    const winindx=checkWin(nextList);
    if (winindx!==-1) {
      play2()
      setIswin(true);
      setStyle(rot_Arr[winindx])
    } else {
      setXturn(!xturn);
    }
  };

  const reloadbutton = () => {
    setGamestate(Array(9).fill(""));
    setXturn(!xturn);
    setIswin(false);
    setStyle({
      width:'0px',
      left:'0px',
      top:'0px',
      transform:"translate(-50%,-50%) rotate(0deg)"
    })
  };

  useEffect(() => {
    console.log(gamestate);
    console.log(iswin);

    // eslint-disable-next-line
  }, [gamestate, xturn, iswin, lm]);

  return (
    <Layout>
      <div
        style={{
          background: lm ? "#fef8b4" : "hsl(257, 8%, 18%)",
          color: lm ? "#404040" : "#f7f7f7",
        }}
        className="tictactoe"
      >
        <div className="tictactoe-game-heading">Let's Play TicTacToe </div>
        <div className="tictactoe-gameinfo">
          <p>
            {iswin
              ? xturn
                ? "X has Won"
                : "O has Won"
              : xturn
              ? "X turn"
              : "O turn"}
          </p>
          <img
            onClick={() => reloadbutton()}
            src={reloadimg}
            alt="reload icon"
          />
        </div>
        <div className="tictactoe-gamebox">
          {gamestate.map((val, index) => (
            <div onClick={() => handleclick(index)} key={index}>
              <span>{val}</span>
            </div>
          ))}
         <p style={style}> </p>
        </div>
      </div>
    </Layout>
  );
};

export default TicTacToe;
