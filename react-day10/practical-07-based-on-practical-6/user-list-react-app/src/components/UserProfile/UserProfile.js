import ProfileCard from "../ProfileCard/ProfileCard";
import "./UserProfile.css";

// UserProfile component with 'user' prop
const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-parent">
      {/* rendering ProfileCard component with user prop */}
      <ProfileCard user={user} />
    </div>
  );
};

export default UserProfile;
