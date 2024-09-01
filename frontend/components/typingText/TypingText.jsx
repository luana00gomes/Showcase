import React, { useState, useEffect } from 'react';
import './typingText.css'

const TypingText = () => {
  const texts = ["Transform your ideas into reality.", 
                  "Looking for a skilled developer? I'm here to help!",
                  "Start your project today."];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        setDisplayedText(texts[index].slice(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === texts[index].length) {
          setForward(false);
        }
      } else {
        setDisplayedText(texts[index].slice(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setForward(true);
          setIndex((index + 1) % texts.length);
        }
      }
    }, 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, texts]);

  return (
    <div className="typing-container">
      <span>
        {displayedText}
      </span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingText;
