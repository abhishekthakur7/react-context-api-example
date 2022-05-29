import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={handleClick}>{counter}</button>
    </>
  );
};

export default Counter;
