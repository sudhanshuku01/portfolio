import React from "react";
import Layout from '../Components1/Layout/Layout'
import coderimg from '../images/coderimg.jpeg'
import { useMode } from "./Context/Mode";
import webdevimg from '../images/web-development.png'
import appdevimg from '../images/development.png'
import devopsimg from '../images/agile.png'
import cloudimg from '../images/data-management.png'

const About = () => {
  const [lm]=useMode();

  return (
    <Layout title='about page of sudhanshu'>
      <div style={{background:lm?'#fef8b4':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}} className="about">
         <div className="about-me">
            <h1>
            About <br /> Me
            <img src={coderimg} alt="" />
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
            <img src={webdevimg} alt="" />
            <img src={appdevimg} alt="" />
            <img src={cloudimg} alt="" />
            <img src={devopsimg} alt="" />
            </div>
            </div>
    </div>
    </Layout>
  );
};

export default About;
