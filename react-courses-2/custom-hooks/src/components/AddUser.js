import React, { useState } from "react";
import { useAxios } from "../hooks/useAxios";

// AddUser component to post user to api and show it
const AddUser = () => {
  // extracting post method from useAxios hook
  const { post } = useAxios();
  // states for handling upcoming information
  // with loading and error state
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // handler function to add user button click
  const handleAddUser = async () => {
    setIsLoading(true);
    const { data, err } = await post("https://gorest.co.in/public/v1/users", {
      name: "random",
      gender: "male",
      email: "abhb@gmail.com",
      status: "active",
    });
    if (err) {
      setError(true);
      setErrorMsg(JSON.stringify(err));
    } else {
      setResponse(data.data);
    }
    setIsLoading(false);
  };

  // handling loading state
  if (isLoading) {
    return <p>adding user...</p>;
  }

  // handling error state
  if (error) {
    return <code>unknown err: {errorMsg}</code>;
  }

  return (
    <div>
      {/* attaching onClick handler to button */}
      <button onClick={handleAddUser}>add user</button>
      {/* conditionally rendering saved user */}
      {response && (
        <>
          <p>user name : {response.name}</p>
          <p>user id : {response.id}</p>
          <p>user email : {response.email}</p>
          <p>user gender : {response.gender}</p>
        </>
      )}
    </div>
  );
};

export default AddUser;
