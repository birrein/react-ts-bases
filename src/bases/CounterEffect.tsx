import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () =>
    setCounter((prevCounter) => Math.min(prevCounter + 1, MAXIMUM_COUNT));

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      easy: 'ease.out',
    }).to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: 'bounce.out',
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
