import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { elementToAnimate, counter, handleClick } = useCounter({
    maxCount: 12,
  });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
