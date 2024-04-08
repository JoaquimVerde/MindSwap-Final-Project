"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import students from "@/app/lib/placeholder-data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import {Camera} from "lucide-react";

const Profile = () => {
  const [name, setName] = useState(students[0].name);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(students[0].email);
  const [password, setPassword] = useState(students[0].password);

  const [address, setAddress] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [editingUsername, setEditingUsername] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  const [avatarImage, setAvatarImage] = useState("/images/avatar.png");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
        setAvatarImage(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };
 

  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-col justify-start">
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


          <p className="font-bold text-slate-400 mt-4">Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded w-80 h-10 px-2 "
            disabled={!editingPassword}
          />
          <Button
            onClick={() => setEditingPassword(!editingPassword)}
            className="w-26 ml-5 hover:bg-blue-700 mt-8"
          >
            {editingPassword ? "Save" : "Edit"}
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
      <div className="flex flex-col items-center justify-center">
        <div className=" flex flex-end mt-20 w-52 h-52 rounded-full overflow-hidden ">
        <Avatar className="w-full h-full rounded-full bg-gray-300">
          <AvatarImage src={avatarImage} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
       </div> 
        <div className="mt-5">
        <label htmlFor="avatarInput" >
        <Camera className="size-10 cursor-pointer" color="#ffffff"/> 
        <input 
            id="avatarInput" 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageUpload} 
          />
        </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
