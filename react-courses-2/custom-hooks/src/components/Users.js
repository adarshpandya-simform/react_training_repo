import React, { useState } from "react";
import { useAxios } from "../hooks/useAxios";

// Users component to show fetched users
const Users = () => {
  // extracting get method from useAxios
  const { get } = useAxios();
  // states for handling upcoming information
  // with loading and error state
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // handling get users on button click
  const handleGetUsers = async () => {
    setIsLoading(true);
    const { data, err } = await get("https://gorest.co.in/public/v1/users");
    if (err) {
      setError(true);
      setErrorMsg(JSON.stringify(err));
    }
    setUsers(data.data);
    setIsLoading(false);
  };

  // handling loading state
  if (isLoading) {
    return <p>users are loading please wait</p>;
  }

  // handling error state
  if (error) {
    return <code>unknown error: {errorMsg}</code>;
  }

  return (
    <div>
      {/* attaching onClick handler on button click */}
      <button onClick={handleGetUsers}>fetch users</button>
      {/* conditionally rendering users */}
      {users && <p>{JSON.stringify(users)}</p>}
    </div>
  );
};

export default Users;
