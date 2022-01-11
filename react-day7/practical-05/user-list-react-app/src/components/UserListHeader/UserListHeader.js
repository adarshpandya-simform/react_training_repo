import "./UserListHeader.css";

// UserListHeader component to render header
const UserListHeader = () => {
  return (
    <div className="user-list-header">
      <div className="header-name">
        <span>Name</span>
      </div>
      <div className="header-info">
        <span className="user-access-status">Status</span>
        <span className="user-access-header">Access</span>
      </div>
    </div>
  );
};

export default UserListHeader;
