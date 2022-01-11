import { Trash2 } from "react-feather";
import "./List.css";

const List = () => {
  return (
    <div className="list">
      <div className="user-details">
        <div className="user-details-container">
          <div className="user-profile-img">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              alt="user-profile"
            />
          </div>
          <div className="user-profile-data">
            <span className="user-name">Jana Strassmann</span>
            <span className="user-email">batz.mortimer@yahoo.com</span>
          </div>
        </div>
      </div>
      <div className="user-info">
        <div className="user-status">
          <select className="user-status-select">
            <option className="user-status-select-option">Inactive</option>
          </select>
        </div>
        <div className="user-access">
          <select className="user-status-select">
            <option className="user-status-select-option">Manager</option>
          </select>
        </div>
        <div className="user-access-auth">
          <Trash2 />
        </div>
      </div>
    </div>
  );
};

export default List;
