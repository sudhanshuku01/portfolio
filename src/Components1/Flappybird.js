import React from "react";
import Layout from "./Layout/Layout";
// import flappychar from '../images/flappychar.png'

const Flappybird = () => {
  // let bird = useRef(null);
  // let gameDisplay = useRef(null)

  // useEffect(() => {
  //   // const ground = document.querySelector(".ground-moving");
  //   let birdLeft = 220;
  //   let birdBottom = 100;
  //   let gravity = 1;
  //   let isGameOver = false;
  //   let gap = 430;

  //   function startGame() {
  //     birdBottom -= gravity;
      
  //     bird.current.style.bottom = birdBottom + "px";
  //     bird.current.style.left = birdLeft + "px";
  //   }
  //   let gameTimerId = setInterval(startGame, 20);

  //   function control(e) {
  //     if (e.keyCode === 32) {
  //       jump();
  //     }
  //   }

  //   function jump() {
  //     if (birdBottom < 500) birdBottom += 50;
  //     bird.current.style.bottom = birdBottom + "px";
  //     console.log(birdBottom);
  //   }
  //   document.addEventListener("keyup", control);

  //   function generateObstacle() {
  //     let obstacleLeft = 500;
  //     let randomHeight = Math.random() * 60;
  //     let obstacleBottom = randomHeight;
  //     const obstacle = document.createElement("div");
  //     const topObstacle = document.createElement("div");
  //     if (!isGameOver) {
  //       obstacle.classList.add("obstacle");
  //       topObstacle.classList.add("topObstacle");
  //     }
  //     gameDisplay.current.appendChild(obstacle);
  //     gameDisplay.current.appendChild(topObstacle);
  //     obstacle.style.left = obstacleLeft + "px";
  //     topObstacle.style.left = obstacleLeft + "px";
  //     obstacle.style.bottom = obstacleBottom + "px";
  //     topObstacle.style.bottom = obstacleBottom + gap + "px";

  //     function moveObstacle() {
  //       obstacleLeft -= 2;
  //       obstacle.style.left = obstacleLeft + "px";
  //       topObstacle.style.left = obstacleLeft + "px";

  //       if (obstacleLeft === -60) {
  //         clearInterval(timerId);
  //         gameDisplay.current.removeChild(obstacle);
  //         gameDisplay.current.removeChild(topObstacle);
  //       }
  //       if (
  //         (obstacleLeft > 200 &&
  //           obstacleLeft < 280 &&
  //           birdLeft === 220 &&
  //           (birdBottom < obstacleBottom + 153 ||
  //             birdBottom > obstacleBottom + gap - 200)) ||
  //         birdBottom === 1
  //       ) {
  //         gameOver();
  //         clearInterval(timerId);
  //       }
  //     }
  //     let timerId = setInterval(moveObstacle, 20);
  //     if (!isGameOver) setTimeout(generateObstacle, 3000);
  //   }
  //   generateObstacle();

  //   function gameOver() {
  //     clearInterval(gameTimerId);
  //     console.log("game over");
  //     isGameOver = true;
  //     document.removeEventListener("keyup", control);
  //     // ground.classList.add("ground");
  //     // ground.classList.remove("ground-moving");
  //   }
  // }, []);

  return (
    <Layout>
      <div className="flappy">
        <div>comming soon...</div>
       {/* <div ref={gameDisplay} className="flappy-container">
          <img ref={bird} className="flappy-character" src={flappychar} alt="flappy-char img" />
       </div> */}
     </div>
    </Layout>
  );
};
export default Flappybird;
