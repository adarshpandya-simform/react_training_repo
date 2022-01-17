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
          // storing page 1 data
          data["page1"] = res.data.data;
        })
        .catch((error) => {
          setUserData([]);
          console.log(error);
        });
    };
    fetchData();
  }, []);

  // function to fetch data according to page clicked
  const fetchDataByPage = async (page) => {
    // checking if data is available in memoization
    if (`page${page}` in data) {
      // setting the pre-fetched data
      setUserData(data[`page${page}`]);
    } else {
      await axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then((res) => {
          setUserData(res.data.data);
          // setting fetched data in memoized form
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
      {/* passing fetchDataByPage as a prop */}
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
