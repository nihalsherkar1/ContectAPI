import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <h2 className="text-black text-center p-5 font-semibold  ">
        Please Login
      </h2>
    );
  }

  return (
    <div>
      <h2 className="text-black text-center p-5 font-semibold  ">
        Welcome {user.username}{" "}
      </h2>
    </div>
  );
};

export default Profile;
