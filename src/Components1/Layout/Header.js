import React, { useState } from "react";
import { useMode } from "../Context/Mode";
import menuimg from "../../images/menu.png";
import { NavLink } from "react-router-dom";
import Typewriter from "../Typewriter";
const Header = () => {
  const [lm, setLm] = useMode();
  const [ulht, setUlht] = useState("0px");

  return (
    <div className="header">
      <div className="header-title">
        <img
          style={{
            border: ulht === "0px" ? "none" : "2px solid grey",
            filter: lm ? "none" : "invert(1)",
          }}
          onClick={() => (ulht === "0px" ? setUlht("200px") : setUlht("0px"))}
          className="menu-icon"
          src={menuimg}
          alt=""
        />
        <NavLink
          to="/"
        >
        <Typewriter text="Sudhanshu" delay="500" infinite={false} />
        </NavLink>
      </div>
      <ul style={{ height: ulht }} className="header-ul">
      <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/workshop">
            Works
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/connect">
            Connect
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/game">
            Games
          </NavLink>
        </li>
      </ul>
      <label className="header-switch">
        <input checked={!lm} onChange={() => setLm(!lm)} type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Header;
