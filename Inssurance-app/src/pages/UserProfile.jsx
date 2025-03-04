import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector(state => state.user);
  if (!user) return <p>Please login to view your profile.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;