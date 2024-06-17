import { useState, useEffect } from "react";

const Map = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div className="w-full container m-6">
      <h1 className="mb-5 pb-5 text-center">
        Mapping all username data from json
      </h1>
      <div className=" text-green-300 p-5">
        <h3 className=" text-left text-lg">How map works??</h3>
        <p>
          Map in array takes each element in the array and apply the function to
          each element
        </p>
      </div>

      <div className="grid grid-cols-3 text-red-300">
        {users.map((user) => {
          return (
            <>
              <div className=" border border-b-orange-50 border-spacing-6 p-6 m-2 ">
                {user.name}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Map;
