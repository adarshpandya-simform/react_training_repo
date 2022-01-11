import UserList from "../UserList/UserList";
import UserProfile from "../UserProfile/UserProfile";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <UserList />
      <UserProfile />
    </div>
  );
};

export default Container;
