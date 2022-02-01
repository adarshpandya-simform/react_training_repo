import { useRouter } from "next/router";

const Profile = () => {
  const { query } = useRouter();
  return (
    <div>
      <p>Hi!!! {query.name}</p>
    </div>
  );
};

export default Profile;
