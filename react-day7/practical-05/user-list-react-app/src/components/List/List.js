import { Lock, Trash2 } from "react-feather";
import "./List.css";

const List = ({ userData, handleUserHover }) => {
  return (
    <div>
      {userData.length === 0 && <p>loading...</p>}
      {userData &&
        userData.map((user, index) => (
          <>
            {index === 0 && (
              <div key={user.phone} className="list">
                <div
                  onMouseEnter={() => {
                    handleUserHover(user);
                  }}
                  onMouseLeave={() => {
                    handleUserHover(null);
                  }}
                  className="user-details"
                >
                  <div className="user-details-container">
                    <div className="user-profile-img">
                      <img src={user.picture.large} alt="user-profile" />
                    </div>
                    <div className="user-profile-data">
                      <span className="user-name">{`${user.name.first} ${user.name.last}`}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-status">
                    <span className="first-user-status">Active</span>
                  </div>
                  <div className="user-access">
                    <span className="first-user-access">Owner</span>
                  </div>
                  <div className="user-access-auth">
                    <Lock />
                  </div>
                </div>
              </div>
            )}
            {index !== 0 && (
              <>
                <div key={user.phone} className="list">
                  <div
                    onMouseEnter={() => {
                      handleUserHover(user);
                    }}
                    onMouseLeave={() => {
                      handleUserHover(null);
                    }}
                    className="user-details"
                  >
                    <div className="user-details-container">
                      <div className="user-profile-img">
                        <img src={user.picture.large} alt="user-profile" />
                      </div>
                      <div className="user-profile-data">
                        <span className="user-name">{`${user.name.first} ${user.name.last}`}</span>
                        <span className="user-email">{user.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="user-info">
                    <div className="user-status">
                      <select className="user-status-select">
                        <option className="user-status-select-option">
                          Inactive
                        </option>
                      </select>
                    </div>
                    <div className="user-access">
                      <select className="user-status-select">
                        <option className="user-status-select-option">
                          Manager
                        </option>
                      </select>
                    </div>
                    <div className="user-access-auth">
                      <Trash2 />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
    </div>
  );
};

export default List;
