"use client";
import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter Component");

  const handleIncrement = () => {
    console.log("Button Increment clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Counter : {count}</h2>
      <button onClick={handleIncrement} className="btn btn-secondary ml-2">
        Increment
      </button>
    </div>
  );
};

export default Counter;
