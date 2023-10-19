import React from "react";
import Layout from '../Components1/Layout/Layout'
import coderimg from '../images/coderimg.png'
import { useMode } from "./Context/Mode";
import webdevimg from '../images/web-development.png'
import appdevimg from '../images/development.png'
import devopsimg from '../images/agile.png'
import cloudimg from '../images/data-management.png'

const About = () => {
  const [lm]=useMode();

  return (
    <Layout title='About - sudhanshu kushwaha'
    description="This is the about page of sudhanshu kushwaha"
    type="about page of programmer"
    key="coder about page, programmer about page,about page,about page design,about page of sudhanshu,about page ux ui,beautiful about page"
    url="https://www.sudhanshukushwah.com/about"
    
    >
      <div style={{background:lm?'#fef8b4':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}} className="about">
         <div className="about-me">
            <h1>
            About <br /> Me
            <img src={coderimg} alt="coding pc icon" />
            </h1>
            <p>Hi, I'm Sudhanshu Kumar, a full stack and app developer. I create web and mobile applications, focusing on user-friendly design and performance optimization. <br />In Cloud and DevOps, I specialize in designing and managing cloud infrastructure while streamlining development processes for faster, more efficient software delivery.
            </p>
            <ul className="about-me-ul">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Cloud and Devops </li>
              <li>Open Source</li>
            </ul>
            <div className="about-me-images">
            <img src={webdevimg} alt="webdevelopment icon" />
            <img src={appdevimg} alt="appdev icon" />
            <img src={cloudimg} alt="cloundcoding icon" />
            <img src={devopsimg} alt="devops img icon" />
            </div>
            </div>
    </div>
    </Layout>
  );
};

export default About;
