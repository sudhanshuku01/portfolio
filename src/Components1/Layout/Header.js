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
          style={{ color: lm ? "rgba(64, 64, 64, 0.99)" : "#3bcc82" }}
          to="/"
        >
          <Typewriter text="Sudhanshu" delay="500" infinite={false} />
        </NavLink>
      </div>
      <ul style={{ height: ulht }} className="header-ul">
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/workshop">
            workshop
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/connect">
            connect
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/about">
            about
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: lm ? "black" : "white" }} to="/blog">
            blog
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
