"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="flex flex-col items-start pl-50">
      <h1 className="mb-10 text-slate-400">Profile</h1>
      <div className="flex flex-col justify-evenly w-full">
        <div>
          <p className="font-bold text-slate-400 mt-4">Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded w-80"
          />
          <p className="font-bold text-slate-400 mt-4">Username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded w-80"
          />
          <p className="font-bold text-slate-400 mt-4">Email:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded w-80"
          />
          <p className="font-bold text-slate-400 mt-4">Address:</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="rounded w-80"
          />
        </div>
        <Button className="w-32 hover:bg-blue-700 mt-8">Edit Profile</Button>
      </div>
    </div>
  );
};

export default Profile;
