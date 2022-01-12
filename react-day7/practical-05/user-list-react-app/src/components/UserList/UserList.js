import List from "../List/List";
import UserListHeader from "../UserListHeader/UserListHeader";
import "./UserList.css";

// UserList component
// accepts userData and handleUserHover as prop
const UserList = ({ userData, handleUserHover }) => {
  return (
    <div className="user-list-parent">
      {/* rendering UserListHeader */}
      <UserListHeader />
      {/* rendering List and passing 'userData' and 'handleUserHover' as prop */}
      <List userData={userData} handleUserHover={handleUserHover} />
    </div>
  );
};

export default UserList;
