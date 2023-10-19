import React from "react";
import Layout from "./Layout/Layout";
import { useMode } from "./Context/Mode";
import { NavLink } from "react-router-dom";
import chatimg from "../images/speech-bubble.png";

const Workspace = () => {
  const [lm] = useMode();

  return (
    <Layout
      title="Work - Sudhanshu Kushwaha"
      description="coding workshop of sudhanshu" 
      keywords="Data Structures, Algorithms, Python, Java, C, C++, JavaScript, Android Development, SQL, Data Science, Machine Learning, PHP, Web Development, System Design, Tutorial, Technical Blogs, Interview Experience, Interview Preparation, Programming, Competitive Programming, SDE Sheet, Job-a-thon, Coding Contests, GATE CSE, HTML, CSS, React, NodeJS, Placement, Aptitude, Quiz, Computer Science, Programming Examples, sudhanshukushwaha courses, Puzzles"
      url="https://www.sudhanshukushwaha.com/workshop"
     >
      <div style={{background:lm?'#fef8b4':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}} className="workshop">
        <div className="workshop-react">
          <h1>React Js</h1>
          <p>
            React.js, often referred to as React, is an open-source JavaScript
            library for building user interfaces. It's maintained by Facebook
            and a community of developers. React is known for its
            component-based architecture, which allows you to create reusable UI
            components and efficiently update the user interface when data
            changes. It's commonly used for building interactive and dynamic web
            applications, providing a fast and efficient way to create modern
            user interfaces. React is often used in combination with other tools
            and libraries to build full-featured web applications.
          </p>
          <h1>Node Js</h1>
          <p>
            Node.js is a runtime environment that allows you to execute
            JavaScript code on the server-side. It's built on the V8 JavaScript
            engine and provides a platform for developing scalable and
            high-performance web applications and networked software. Node.js is
            known for its non-blocking, event-driven architecture, making it
            well-suited for building real-time applications and server-side
            scripting. It has a rich ecosystem of packages and libraries
            available through npm, which is the Node Package Manager, and is
            widely used for building web servers, APIs, and various other types
            of applications.
          </p>
        </div>
        <div className="workshop-chatapp">
          <div className="workshop-chatapp-content">
            <h1>Chat Application</h1>
            <ul>
              <li>Node.js is used to create the server-side logic for the chat
              application.</li>
              <li>
                It handles real-time <strong>communication</strong>, <strong>user authentication</strong>, and 
                 <strong> message storage</strong>.
              </li>
              <li>
                <strong>WebSocket</strong> or a similar technology is often used to enable
                real-time, <strong>bidirectional communication</strong> between the server and
                clients.
              </li>
              <li>
                Popular libraries like <strong>Socket.io</strong> can simplify WebSocket
                implementation.
              </li>
              <li>
                React is used to build the user interface of the chat
                application.
              </li>
              <li>
                Users can view and send messages through the React-based
                interface.
              </li>
              <li>
                The React app connects to the Node.js backend using WebSocket or
                other <strong>protocols</strong> to ensure real-time updates.
              </li>
              <li>
                Components are used to structure the user interface, and state
                management libraries like <strong>Redux</strong> or <strong>React Context</strong> can be used to
                manage application data.
              </li>
              <li>
                <NavLink style={{color:lm?'#404040':'#f7f7f7'}} href="/"><strong>SOURCE CODE</strong></NavLink>
              </li>
            </ul>
          </div>
          <div className="workshop-chatapp-image">
            <img src={chatimg} alt="chatapp logo" />
          </div>
        </div>
        <div className="workshop-repolink">
          <NavLink
          style={{background:lm?'hsl(257, 8%, 18%)':'#fef8b4'}}
           to="https://github.com/sudhanshuku01?tab=repositories" target="_blank">Here More Work</NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Workspace;
