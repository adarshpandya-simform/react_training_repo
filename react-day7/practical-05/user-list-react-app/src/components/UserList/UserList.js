import List from "../List/List";
import UserListHeader from "../UserListHeader/UserListHeader";
import "./UserList.css";

const UserList = () => {
  return (
    <div className="user-list-parent">
      <UserListHeader />
      <List />
    </div>
  );
};

export default UserList;
