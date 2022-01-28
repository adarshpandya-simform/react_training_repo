import React, { useState } from "react";
import { useAxios } from "../hooks/useAxios";

const Users = () => {
  const { get } = useAxios();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  if (isLoading) {
    return <p>users are loading please wait</p>;
  }

  if (error) {
    return <code>unknown error: {errorMsg}</code>;
  }

  return (
    <div>
      <button onClick={handleGetUsers}>fetch users</button>
      {users && <p>{JSON.stringify(users)}</p>}
    </div>
  );
};

export default Users;
