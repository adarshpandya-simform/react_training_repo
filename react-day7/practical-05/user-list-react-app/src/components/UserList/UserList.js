import List from "../List/List";
import UserListHeader from "../UserListHeader/UserListHeader";
import "./UserList.css";

const UserList = ({ userData }) => {
  return (
    <div className="user-list-parent">
      <UserListHeader />
      <List userData={userData} />
    </div>
  );
};

export default UserList;
