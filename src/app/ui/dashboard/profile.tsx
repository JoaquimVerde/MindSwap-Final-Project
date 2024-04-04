import React from "react";

const Profile= () => {
  return (
    <div>
      <h1 className="space-">Profile</h1>
      <div className="flex flex-row justify-evenly">
        <div>
          <p className="font-bold">Name: {}</p>
          <p className="font-bold">Username: {}</p>
          <p className="font-bold">Email: {}</p>
          <p className="font-bold">Address: {}</p>
        </div>
        <div>
          <p>Avatar</p>
          {/* {avatarUrl && <Image src={avatarUrl} alt="Profile Picture" width={150} height={150} />} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
