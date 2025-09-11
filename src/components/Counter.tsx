import { useEffect, useState } from "react";

interface CounterProps {
  value: number;       // valeur finale
  duration?: number;   // durée de l’animation en ms
}

export const Counter = ({ value, duration = 1000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString(), 10);
    if (start === end) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};
