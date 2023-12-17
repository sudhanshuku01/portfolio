import React from "react";
import ellipsiseimg from '../../images/ellipsis.png'
import { useMode } from "../Context/Mode";
const DraggableCard = ({ head, desc, img}) => {
  const [lm]=useMode();
  // const [isDragging, setIsdragging] = useState(false);
  return (
    <div
    style={{background:lm?'#ffffff':'#303145',color:lm?'#404040':'#f7f7f7'}}
      className="draggablecard"
    >
      <div className="draggablecard-dragdiv">
        <img src={ellipsiseimg} alt="" />
      </div>
      <p></p>
      <div className="draggablecard-content">
        <h1>{head}</h1>
        <p>{desc}</p>
      </div>
      <a     style={{color:lm?'#4040af':'#f7f700'}}href="https://www.google.com">Read More</a>
    </div>
  );
};

export default DraggableCard;
