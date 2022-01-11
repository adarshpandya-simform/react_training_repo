import "./UserListHeader.css";

const UserListHeader = () => {
  return (
    <div className="user-list-header">
      <div className="header-name">
        <span>Name</span>
      </div>
      <div className="header-info">
        <span>Status</span>
        <span>Access</span>
      </div>
    </div>
  );
};

export default UserListHeader;
