// profile page w/ settings that you can change, depending on your role permissions
// display name
// change email - only if student?
// change photo

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Profile from "@/app/ui/dashboard/profile";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex">
      <Profile />
      <div className="border border-gray-300 w-52 h-52 ml-10 rounded-full overflow-hidden">
        <Avatar className="w-full h-full rounded-full bg-gray-300">
          <AvatarImage src="/images/avatar.png" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default ProfilePage;
