import React from "react";
import { useMode } from "./Context/Mode";
import pcimg from "../images/programming.png";
import Canvas from "./Canvas/Canvas";

const Hero = () => {
  const [lm] = useMode();

  return (
    <div className="hero">
      <div
        style={{
          backgroundColor: lm ? "rgba(111, 220, 191, 0.9)" : "hsl(0, 0%, 25%)",
        }}
        className="hero-left"
      >
        <img src={pcimg} alt="" />
      </div>
      <div
        style={{
          backgroundColor: lm ? "#f7f7f7" : "hsl(257, 8%, 18%)",
          color: lm ? "hsl(0, 0%, 25%)" : "#fafafa",
        }}
        className="hero-right"
      >
        <div className="hero-right-content">
          <p>👋Hi,I'm sudhanshu</p>
          <h1>
            I like making <br />
            fun, <br />
            interactive things with code. I also talk & write about those
            things.
          </h1>
          <button
            style={{
              boxShadow: lm ? "3px 3px hsl(274, 4%, 18%)" : "2px 2px #ff0000",
            }}
          >
            Touch Screen For Magic 🪄
          </button>
        </div>
      </div>
      <Canvas />
    </div>
  );
};

export default Hero;
