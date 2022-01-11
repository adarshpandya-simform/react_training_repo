import ProfileCard from "../ProfileCard/ProfileCard";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-parent">
      <ProfileCard user={user} />
    </div>
  );
};

export default UserProfile;
