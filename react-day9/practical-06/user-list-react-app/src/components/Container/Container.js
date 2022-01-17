import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import UserProfile from "../UserProfile/UserProfile";
import "./Container.css";

// memoize user
const data = {};

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
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
          setUserData(res.data.data);
          data["page1"] = res.data.data;
        })
        .catch((error) => {
          setUserData([]);
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const fetchDataByPage = async (page) => {
    if (`page${page}` in data) {
      setUserData(data[`page${page}`]);
    } else {
      await axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then((res) => {
          setUserData(res.data.data);
          data[`page${page}`] = res.data.data;
        })
        .catch((error) => {
          setUserData([]);
          console.log(error);
        });
    }
  };

  return (
    <div className="container">
      {/* passing userData and handleUserHover as prop */}
      <UserList
        userData={userData}
        handleUserHover={handleUserHover}
        fetchDataByPage={fetchDataByPage}
      />
      {/* passing the current hovered user as prop */}
      <UserProfile user={user} />
    </div>
  );
};

export default Container;
