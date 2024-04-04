"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import students from "@/app/lib/placeholder-data";

const Profile = () => {
  const [name, setName] = useState(students[0].name);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(students[0].email);
  const [address, setAddress] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [editingUsername, setEditingUsername] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);

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
            className="rounded w-80 h-10 px-2"
            disabled={!editingName}
          />
          <Button
            onClick={() => setEditingName(!editingName)}
            className="w-26 ml-5 hover:bg-blue-700 mt-8"
          >
            {editingName ? "Save" : "Edit"}
          </Button>

          <p className="font-bold text-slate-400 mt-4">Username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded w-80 h-10 px-2"
            disabled={!editingUsername}
          />
          <Button
            onClick={() => setEditingUsername(!editingUsername)}
            className="w-26 ml-5 hover:bg-blue-700 mt-8"
          >
            {editingUsername ? "Save" : "Edit"}
          </Button>

          <p className="font-bold text-slate-400 mt-4">Email:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded w-80 h-10 px-2 "
            disabled={!editingEmail}
          />
          <Button
            onClick={() => setEditingEmail(!editingEmail)}
            className="w-26 ml-5 hover:bg-blue-700 mt-8"
          >
            {editingEmail ? "Save" : "Edit"}
          </Button>

          <p className="font-bold text-slate-400 mt-4">Address:</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="rounded w-80 h-10 px-2"
            disabled={!editingAddress}
          />
          <Button
            onClick={() => setEditingAddress(!editingAddress)}
            className="w-26 ml-5 hover:bg-blue-700 mt-8"
          >
            {editingAddress ? "Save" : "Edit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
