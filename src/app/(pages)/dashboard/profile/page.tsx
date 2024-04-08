// profile page w/ settings that you can change, depending on your role permissions

import Profile from "@/app/ui/dashboard/profile";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex-min-h-screen flex-col items-center justify-between">
      <Profile username={""} id={""} email={""} firstName={""} lastName={""} address={""} />
    </div>
  );
};

export default ProfilePage;
