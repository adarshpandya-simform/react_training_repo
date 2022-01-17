import { Lock, Trash2 } from "react-feather";
import "./List.css";

// List component to display list of users
// accepts userData, handleUserHover as props
const List = ({ userData, handleUserHover }) => {
  return (
    <div>
      {/* showing appropriate msg on 0 length*/}
      {userData.length === 0 && <p>loading...</p>}
      {/* mapping and rendering users */}
      {userData &&
        userData.map((user, index) => (
          <div key={user.id}>
            {/* checking first user */}
            {index === 0 && (
              <div key={user.id} className="list">
                <div
                  // handlers for mouseEnter and leave events
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
                      <img src={user.avatar} alt="user-profile" />
                    </div>
                    <div className="user-profile-data">
                      <span className="user-name">{`${user.first_name} ${user.last_name}`}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                  </div>
                </div>
                {/* markup for user in first row (as per instruction) */}
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
            {/* conditinally rendering other users */}
            {index !== 0 && (
              <>
                <div key={user.id} className="list">
                  <div
                    // event handlers for mouse hover and mouse leave
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
                        <img src={user.avatar} alt="user-profile" />
                      </div>
                      <div className="user-profile-data">
                        <span className="user-name">{`${user.first_name} ${user.last_name}`}</span>
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
          </div>
        ))}
    </div>
  );
};

export default List;
