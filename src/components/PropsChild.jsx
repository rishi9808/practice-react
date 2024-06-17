import React, { useState } from "react";

const PropsChild = ({ message , sendValue }) => {
  const [value,setValue] =useState("")
  return (
    <>
      {message && (
        <div className="container bg-gray-500 m-20 p-10">
          <h3>Message(child component)</h3>
          <h4>{message}</h4>

          <input type="text"
          value={value}
          onChange={(e)=> setValue(e.target.value)} />
          <button onClick={() =>sendValue(value)}>send to parent</button>
        </div>
      )}
    </>
  );
};

export default PropsChild;
