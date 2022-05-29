import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Header = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return <h1>Shared heading count {counter}</h1>;
};

export default Header;
