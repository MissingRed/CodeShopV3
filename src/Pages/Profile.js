import React from "react";
import Sidebar from "../Components/Sidebar";

const Profile = () => {
  return (
    <>
      <div>
        <div className="grid">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
