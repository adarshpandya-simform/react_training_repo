import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import UserProfile from "../UserProfile/UserProfile";
import "./Container.css";

const Container = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://randomuser.me/api/?results=7")
        .then((res) => setUserData(res.data.results))
        .catch((error) => {
          setUserData([]);
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <UserList userData={userData} />
      <UserProfile />
    </div>
  );
};

export default Container;
