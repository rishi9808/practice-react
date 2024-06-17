import React from "react";
import { useState } from "react";

//counter app
const State = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="w-full m-10">
      <div className=" text-center text-3xl font-mono font-medium">
        {counter}
        <div className="mt-10">
          <button className="mr-5" onClick={handleIncrement}>
            Increment
          </button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default State;
