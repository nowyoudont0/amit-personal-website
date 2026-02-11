import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isStarted, setIsStarted] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isStarted) return;

    const startTime = performance.now() + delay;
    const diff = end - start;

    const animate = (currentTime: number) => {
      if (currentTime < startTime) {
        const frameId = requestAnimationFrame(animate);
        frameRef.current = frameId;
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + diff * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        const frameId = requestAnimationFrame(animate);
        frameRef.current = frameId;
      }
    };

    const initialFrameId = requestAnimationFrame(animate);
    frameRef.current = initialFrameId;

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isStarted, start, end, duration, delay]);

  const startCounting = () => setIsStarted(true);

  const formattedCount = `${prefix}${count}${suffix}`;

  return { count, formattedCount, startCounting };
}
