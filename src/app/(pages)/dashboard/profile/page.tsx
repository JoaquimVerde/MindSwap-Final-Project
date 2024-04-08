// profile page w/ settings that you can change, depending on your role permissions
// display name
// change email - only if student?
// change photo

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Profile from "@/app/ui/dashboard/profile";
import React from "react";
import {Camera} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex-min-h-screen flex-col items-center justify-between">
      <Profile />
    </div>
  );
};

export default ProfilePage;
