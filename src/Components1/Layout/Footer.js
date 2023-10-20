import React from "react";
import ghimg from "../../images/github.png";
import instaimg from "../../images/instagram.png";
import ldnimg from "../../images/linkedin-logo.png";
import footimg from "../../images/peakpx-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "hsl(237, 18%, 23%)" }} className="footer">
      <div className="footer-info">
        <h1 style={{ color: "hsl(172.73deg 24.28% 93.26%)" }}>
          I'm always up for chat
        </h1>
        <p>
          <Link
            style={{ color: "hsl(172.73deg 24.28% 93.26%)" }}
            to="mailto:sudhanshu620026@gmail.com"
            target="_blank"
          >
            pop me an email
          </Link>
        </p>
        <div className="footer-info-socials">
          <Link to="https://github.com/sudhanshuku01"  target="_blank">
            <img src={ghimg} alt="github icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/sudhanshu-kumar-2a9ba5228/"
            target="_blank"
          >
            <img src={ldnimg} alt="linkdenin icon" />
          </Link>
          <Link
           to="https://www.instagram.com/sudhanshu.kushwaha01/"
           target="_blank" 
           >
            <img src={instaimg} alt="instagram icon" />
          </Link>
        </div>
      </div>
      <div className="footer-image">
        <img src={footimg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
