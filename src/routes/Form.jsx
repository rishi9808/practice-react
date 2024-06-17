import React, { useState } from "react";

const Form = () => {
  const [objData, setObjData] = useState({});
  const getInput = (e) => {
    const { name, value } = e.target;
    const data = { [name]: value };
    setObjData({ ...objData, ...data });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("submittedData =" +objData.name)
  }

  console.log(objData);
  return (
    <>
    <h1 className="text-center mt-5">Form</h1>
    <form action="" className="flex justify-center p-10 text-center" onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="" className="flex">Name</label>
        <input
          type="text"
          name="name"
          onChange={getInput}
          className="bg-white text-black px-2 py-3 m-3 w-1/2"
        />
        <label htmlFor="" className="flex">Age</label>
        <input
          type="number"
          name="age"
          onChange={getInput}
          className="bg-white text-black px-2 py-3 m-3 w-1/2"
        />
        <label htmlFor="" className="flex">DOB</label>
        <input
          type="date"
          name="date"
          onChange={getInput}
          className="bg-white text-black px-2 py-3 m-3 w-1/2"
        />
        <button className="flex" type="submit" onSubmit={handleSubmit}>Submit</button>
      </div>
    </form>

    
    </>
  );
};

export default Form;
