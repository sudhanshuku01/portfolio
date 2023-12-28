import React, { useState } from "react";
// import htmlimg from "../images/html.png";
// import cssimg from "../images/css.png";
// import jsimg from "../images/js.png";
// import reactimg from "../images/structure.png";
// import nodeimg from "../images/node-js.png";
// import nextjsimg from "../images/Next.js.png";
// import  andimg from '../images/andstd.png'
// import  javaimg from '../images/java.png'
// import  pythonimg from '../images/python.png'
import DraggableCard from "./Draggable/Draggable";
import { useMode } from "./Context/Mode";

const Tech_Object = [
  [
    "Java",
    "Java is a versatile, object-oriented programming language developed by Sun Microsystems (now owned by Oracle).Java allows developers to write code once and run it anywhere. It is widely used for building web applications, mobile apps (Android), enterprise systems, and more.",
  ],
  [
    "Data-Structure",
    "A data structure is a way of organizing and storing data to enable efficient operations like insertion, retrieval, and deletion. Examples include arrays, linked lists, and trees, each tailored for specific data manipulation needs.",
  ],
  [
    "Algorithm",
    "An algorithm is a step-by-step set of instructions or rules designed to solve a specific problem or perform a particular task. Algorithms serve as systematic approaches to problem-solving, providing a clear sequence of operations for computers to execute efficiently and accurately.",
  ],
  [
    "Html & Css",
    "HTML (Hypertext Markup Language) structures web content using tags, defining elements like headings and links. CSS (Cascading Style Sheets) styles HTML elements, controlling layout and presentation. They combine to build visually appealing and structured websites, separating content from design.",
  ],
  [
    "Javascript",
    "JavaScript is a programming language that enables dynamic, interactive behavior on websites. It runs in web browsers, allowing developers to create responsive and engaging user interfaces by manipulating the content and behavior of web pages.",
  ],
  [
    "ReactJs",
    "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the view in response to data changes. React is widely used for building modern, interactive web applications.",
  ],
  [
    "NodeJs",
    "Node.js is a JavaScript runtime that allows developers to execute JavaScript code server-side. It enables building scalable and efficient web applications by leveraging the V8 JavaScript engine. Node.js is particularly known for its non-blocking, event-driven architecture, making it well-suited for building real-time applications and server-side logic.",
  ],
  [
    "NextJs",
    "Next.js is a React framework for building web applications. It simplifies React development by providing features like server-side rendering, automatic code splitting, and easy configuration. Next.js enables the creation of fast, SEO-friendly, and scalable React applications with a focus on simplicity and performance.",
  ],
  [
    "AngularJS",
    "AngularJS, now Angular, is a JavaScript framework for building dynamic web applications. Developed by Google, it simplifies front-end development by providing tools for creating single-page applications with a modular and declarative approach. Angular facilitates data binding, dependency injection, and reusable components, streamlining the development process.",
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
                desc={item[1]}
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
        {cardno === 4 ? "Show More.." : "Show Less.."}
      </p>
    </section>
  );
};

export default Technology;
