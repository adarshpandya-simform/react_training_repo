import { useState } from "react";
import List from "../List/List";
import UserListHeader from "../UserListHeader/UserListHeader";
import "./UserList.css";

// UserList component
// accepts userData and handleUserHover as prop
const UserList = ({ userData, handleUserHover, fetchDataByPage }) => {
  const [page, setPage] = useState(1);

  const handlePagination = (page) => {
    fetchDataByPage(String(page));
    setPage(page);
  };

  return (
    <div className="user-list-parent">
      {/* rendering UserListHeader */}
      <UserListHeader />
      {/* rendering List and passing 'userData' and 'handleUserHover' as prop */}
      <List userData={userData} handleUserHover={handleUserHover} />
      {/* rendering a basic pagination with 2 pages (as per instruction in task) */}
      <div className="pagination-keys">
        <button
          onClick={() => {
            handlePagination(1);
          }}
          className={page === 1 ? "active-page" : ""}
        >
          1
        </button>
        <button
          onClick={() => {
            handlePagination(2);
          }}
          className={page === 2 ? "active-page" : ""}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default UserList;
