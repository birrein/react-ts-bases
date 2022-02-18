import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 15 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () =>
    setCounter((prevCounter) => Math.min(prevCounter + 1, maxCount));

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        easy: 'ease.out',
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
