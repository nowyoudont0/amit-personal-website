import { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypeWriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
  cursorClassName = '',
  showCursor = true,
  onComplete,
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const typeNextCharacter = useCallback(() => {
    const fullText = texts[currentTextIndex];
    
    if (isDeleting) {
      setCurrentText((prev) => prev.slice(0, -1));
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      setCurrentText(fullText.slice(0, currentText.length + 1));
      if (currentText.length + 1 === fullText.length) {
        if (texts.length === 1 && onComplete) {
          onComplete();
          return;
        }
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, texts, pauseDuration, onComplete]);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(
      typeNextCharacter,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [typeNextCharacter, isDeleting, isPaused, typingSpeed, deletingSpeed]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <span
          className={`inline-block w-[3px] h-[1em] bg-current ml-1 animate-cursor-blink ${cursorClassName}`}
        />
      )}
    </span>
  );
}
