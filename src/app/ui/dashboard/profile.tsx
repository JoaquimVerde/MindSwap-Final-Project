"use client";

import { Button } from "@/components/ui/button";
const Profile = () => {
  // Replace these with your actual state variables and update functions
  const name = "";
  const username = "";
  const email = "";
  const address = "";

  return (
    <div className="flex flex-col items-start pl-50">
      <h1 className="mb-10 text-slate-400">Profile</h1>
      <div className="flex flex-col justify-evenly w-full ml-6">
        <div>
          <p className="font-bold text-slate-400 mt-4">Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => {}}
            className="rounded"
          />
          <p className="font-bold text-slate-400 mt-4">Username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => {}}
            className="rounded"
          />
          <p className="font-bold text-slate-400 mt-4">Email:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => {}}
            className="rounded"
          />
          <p className="font-bold text-slate-400 mt-4">Address:</p>
          <input
            type="text"
            value={address}
            onChange={(e) => {}}
            className="rounded"
          />
        </div>
        <Button className="w-32 hover:bg-blue-700 mt-8">Edit Profile</Button>
      </div>
    </div>
  );
};

export default Profile;
