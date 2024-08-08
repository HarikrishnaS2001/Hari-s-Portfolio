import React, { useState, useEffect, useRef } from 'react';
import './TypingAnimation.css'; // Import CSS for animation

const TypingAnimation = ({ text, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsPaused(true);
      const pauseTimer = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
        setIsPaused(false);
      }, delay);

      return () => clearTimeout(pauseTimer);
    }
  }, [index, text, speed, delay]);

  return (
    <div className="typing-container">
      <span className="typing-text">{displayedText}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
