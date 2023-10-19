import { useState, useEffect } from 'react';
import { useMode } from './Context/Mode';
const Typewriter = ({ text, delay, infinite }) => {
  const [lm]=useMode()
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if(infinite){ // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }else{
        setCurrentText(text)
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text,lm]);

  return <span 
  style={{ color: lm ? "rgba(64, 64, 64, 0.99)" : "#3bcc82" }}
   >{currentText}</span>;
};

export default Typewriter;