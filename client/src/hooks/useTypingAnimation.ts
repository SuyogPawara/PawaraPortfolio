import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const useTypingAnimation = ({
  phrases,
  typeSpeed = 150,
  deleteSpeed = 100,
  pauseTime = 2000,
}: UseTypingAnimationProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentPhrase = phrases[currentIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && currentText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases, typeSpeed, deleteSpeed, pauseTime]);

  return currentText;
};
