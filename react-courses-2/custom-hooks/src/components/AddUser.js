import React, { useState } from "react";
import { useAxios } from "../hooks/useAxios";

const AddUser = () => {
  const { post } = useAxios();
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleAddUser = async () => {
    setIsLoading(true);
    const { data, err } = await post("https://gorest.co.in/public/v1/users", {
      name: "a",
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

  if (isLoading) {
    return <p>adding user...</p>;
  }
  if (error) {
    return <code>unknown err: {errorMsg}</code>;
  }
  return (
    <div>
      <button onClick={handleAddUser}>add user</button>
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
