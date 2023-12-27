import React from "react";
import Layout from "./Layout/Layout";
import { useMode } from "./Context/Mode";
import { NavLink } from "react-router-dom";
import meetmeimg from "../images/meetme.png";
import ecommimg from "../images/ecommerce.png";

const Workspace = () => {
  const [lm] = useMode();

  return (
    <Layout
      title="Work - Sudhanshu Kushwaha"
      description="coding workshop of sudhanshu"
      keywords="Data Structures, Algorithms, Python, Java, C, C++, JavaScript, Android Development, SQL, Data Science, Machine Learning, PHP, Web Development, System Design, Tutorial, Technical Blogs, Interview Experience, Interview Preparation, Programming, Competitive Programming, SDE Sheet, Job-a-thon, Coding Contests, GATE CSE, HTML, CSS, React, NodeJS, Placement, Aptitude, Quiz, Computer Science, Programming Examples, sudhanshukushwaha courses, Puzzles"
      url="https://www.sudhanshukushwaha.com/workshop"
    >
      <div
        style={{
          background: lm ? "#fef8b4" : "hsl(257, 8%, 18%)",
          color: lm ? "#404040" : "#f7f7f7",
        }}
        className="workshop"
      >
        <div className="workshop-container">
          <div
            style={{ background: lm ? "#ffffff" : "#404040" }}
            className="workshop-card"
          >
            <div>
              <h1>Chat App</h1>
              <p>real-time communication globally</p>
            </div>
            <div style={{ background: lm ? "#ad998a" : "hsl(260, 24%, 18%)" }}>
              <img src={meetmeimg} alt="chat app icon" />
              <h1>Technology Used</h1>
              <p>Javascript | ReactJs</p>
              <p>NodeJs | MongoDb</p>
              <button
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                code
              </button>
            </div>
          </div>

          <div
            style={{ background: lm ? "#ffffff" : "#404040" }}
            className="workshop-card"
          >
            <div>
              <h1>Ecommerce App</h1>
              <p>simplify online shopping</p>
            </div>
            <div style={{ background: lm ? "#ad998a" : "hsl(260, 24%, 18%)" }}>
              <img src={ecommimg} alt="chat app icon" />
              <h1>Technology Used</h1>
              <p>Javascript | ReactJs</p>
              <p>NodeJs | MongoDb</p>
              <button
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                code
              </button>
            </div>
          </div>
        </div>
        <div className="workshop-repolink">
          <NavLink
            style={{ background: lm ? "hsl(257, 8%, 18%)" : "#fef8b4" }}
            to="https://github.com/sudhanshuku01?tab=repositories"
            target="_blank"
          >
            Here More Work
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Workspace;
