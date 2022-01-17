import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import UserProfile from "../UserProfile/UserProfile";
import "./Container.css";

// Container component
const Container = () => {
  // for users
  const [userData, setUserData] = useState([]);
  // for hovered user
  const [user, setUser] = useState(null);

  // handling hovered user
  const handleUserHover = (user) => {
    setUser(user);
  };

  // fetch users through axios on component mount
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
      {/* passing userData and handleUserHover as prop */}
      <UserList userData={userData} handleUserHover={handleUserHover} />
      {/* passing the current hovered user as prop */}
      <UserProfile user={user} />
    </div>
  );
};

export default Container;
