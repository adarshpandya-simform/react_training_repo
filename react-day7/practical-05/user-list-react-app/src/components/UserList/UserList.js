import List from "../List/List";
import UserListHeader from "../UserListHeader/UserListHeader";
import "./UserList.css";

const UserList = ({ userData, handleUserHover }) => {
  return (
    <div className="user-list-parent">
      <UserListHeader />
      <List userData={userData} handleUserHover={handleUserHover} />
    </div>
  );
};

export default UserList;
