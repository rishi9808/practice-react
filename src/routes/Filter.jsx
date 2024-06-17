import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [buttonData, setButtonData] = useState(
    "Filter values with starting 'C'"
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setOriginalUsers(json);
      });
  }, []);

  const filterData = () => {
    const filteredData = users.filter((user) => user.name[0] === "C");
    setUsers(filteredData);
    setButtonData("Go Back");
  };

  const handleGoBack = () => {
    setUsers(originalUsers);
    setButtonData("Filter values with starting 'C'");
  };

  return (
    <div className="w-full container m-6">
      <h1 className="mb-5 pb-5 text-center">Filter data from json</h1>
      <div className="text-green-300 p-5">
        <h3 className="text-left text-lg">How filter works??</h3>
        <p>
          Filter in array checks the function and returns those elements that
          satisfy the function
        </p>
      </div>
      <div className="grid grid-cols-3 text-red-300">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-b-orange-50 border-spacing-6 p-6 m-2"
          >
            {user.name}
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-green-200 text-black"
          onClick={buttonData === "Go Back" ? handleGoBack : filterData}
        >
          {buttonData}
        </button>
      </div>
    </div>
  );
};

export default Filter;
