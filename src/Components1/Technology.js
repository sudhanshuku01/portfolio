import React, { useState } from "react";
import htmlimg from "../images/html.png";
import cssimg from "../images/css.png";
import jsimg from "../images/js.png";
import reactimg from "../images/structure.png";
import nodeimg from "../images/node-js.png";
import nextjsimg from "../images/Next.js.png";
// import  andimg from '../images/andstd.png'
// import  javaimg from '../images/java.png'
// import  pythonimg from '../images/python.png'
import DraggableCard from "./Draggable/Draggable";
import { useMode } from "./Context/Mode";

const Tech_Object = [
  [
    "Html",
    htmlimg,
    "HTML is a markup language for creating web pages. It uses tags to structure content and is essential for building and formatting information on the internet.",
  ],
  [
    "Css",
    cssimg,
    "CSS, or Cascading Style Sheets, styles and designs web pages by defining how elements look and are positioned. It separates the visual presentation from the HTML structure, ensuring consistency and flexibility in web design.",
  ],
  [
    "Javascript",
    jsimg,
    "JavaScript is a programming language that enables dynamic, interactive behavior on websites. It runs in web browsers, allowing developers to create responsive and engaging user interfaces by manipulating the content and behavior of web pages.",
  ],
  [
    "React",
    reactimg,
    "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the view in response to data changes. React is widely used for building modern, interactive web applications.",
  ],
  [
    "NodeJs",
    nodeimg,
    "Node.js is a JavaScript runtime that allows developers to execute JavaScript code server-side. It enables building scalable and efficient web applications by leveraging the V8 JavaScript engine. Node.js is particularly known for its non-blocking, event-driven architecture, making it well-suited for building real-time applications and server-side logic.",
  ],
  [
    "NextJs",
    nextjsimg,
    "Next.js is a React framework for building web applications. It simplifies React development by providing features like server-side rendering, automatic code splitting, and easy configuration. Next.js enables the creation of fast, SEO-friendly, and scalable React applications with a focus on simplicity and performance.",
  ],
];
const Technology = () => {
  const [cardno, setCardno] = useState(4);
  const [lm]=useMode();
  return (
    <section style={{background:lm?'#72cada':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}} className="technology">
      <h1>Skills</h1>
      <div className="technology-container">
        {Tech_Object.map(
          (item, index) =>
            index <= cardno - 1 && (
              <DraggableCard
                key={index}
                head={item[0]}
                title={item[0]}
                img={item[1]}
                desc={item[2]}
              />
            )
        )}
      </div>
      <p
        style={{background:lm?'#fffff0':'#00000f',color:lm?'#404040':'#f7f7f7'}}
        onClick={() => {
          if (cardno === 4) {
            setCardno(Tech_Object.length);
          } else {
            setCardno(4);
          }
        }}
      >
        {cardno === 4 ? "Show More" : "Show Less"}
      </p>
    </section>
  );
};

export default Technology;
