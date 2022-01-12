import "./ProfileCard.css";

// Profile card component for rendering dynamic card
// accepts 'user' as prop
const ProfileCard = ({ user }) => {
  return (
    // conditionally applying show/hide class
    <div className={`profile-card ${user !== null ? "show" : "hide"}`}>
      {/* checking if user[] is not null */}
      {user !== null && (
        <>
          {/* rendering markup with flexbox approach */}
          <div className="card-user-details">
            <div className="card-user-details-container">
              <div className="card-user-info">
                <div className="card-user-profile-img">
                  <img src={user.picture.large} alt="profile-img" />
                </div>
                <div className="card-user-profile-name">
                  <span>{`${user.name.first} ${user.name.last}`}</span>
                  <div className="status-dot"></div>
                </div>
                <div className="card-user-profile-email">
                  <span>{user.email}</span>
                </div>
                <div className="card-user-profile-plan">
                  <span>Your Plan: Standard</span>
                </div>
                <div className="card-user-profile-button">
                  <button>Active User</button>
                </div>
              </div>
              <div>
                <span></span>
                <br />
              </div>
              <div className="card-user-plan-info">
                <div className="card-plan-uses">
                  <span>Plan Uses</span>
                  <div className="plan-validity">
                    <div className="current-validity"></div>
                  </div>
                </div>
                <div className="card-clicks">
                  <div className="card-clicks-viewed">
                    <span className="click-amount">2,450</span>
                    <span className="click-desc">clicks reviewed</span>
                  </div>
                  <div className="card-clicks-monthly">
                    <span className="click-amount">5,000</span>
                    <span className="click-desc">monthly clicks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
