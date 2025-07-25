import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isAnimating) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, isAnimating]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-bounce-in"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
};

export default AnimatedText;