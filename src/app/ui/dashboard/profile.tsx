"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { Camera, Eye, EyeOff } from "lucide-react";
import { Person } from "@/app/lib/definitions";
import { fetchPerson } from "@/app/lib/data";
import { useForm } from "react-hook-form";

interface ProfileProps {
  initialProfileData?: Person;
}

const Profile: React.FC<ProfileProps> = ({ initialProfileData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<Person>({ defaultValues: initialProfileData });
  const [avatarImage, setAvatarImage] = useState("/images/avatar.png");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personData = await fetchPerson();
        setValue("firstName", personData.firstName);
        setValue("lastName", personData.lastName);
        setValue("username", personData.username);
        setValue("email", personData.email);
        setValue("password", personData.password);
        setValue("address", personData.address);
        // setAvatarImage(personData.avatarImage); Add avatar image??
      } catch (error) {
        console.error("Error fetching person:", error);
      }
    };

    fetchData();
  }, []);

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

  const onSubmit = async (data: Person) => {
    console.log(data);
    try {
      const requestBody = {
        ...data,
        role: "STUDENT", // Back end needs these informations to update information
        dateOfBirth: "1990-01-01",
        cv: "my first cv",
      };

      const response = await fetch(
        `http://localhost:8080/api/v1/persons/PERSON%2333816dfd-9f6e-4b63-9752-9d608ea63528
`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update person");
      }
      console.log("Person updated successfully");
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-col justify-start">
        <h1 className="mb-10 text-slate-400">Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="font-bold text-slate-400 mt-4">First Name</p>
            <input
              type="text"
              {...register("firstName")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />
            <p className="font-bold text-slate-400 mt-4">Last Name</p>
            <input
              type="text"
              {...register("lastName")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />

            <p className="font-bold text-slate-400 mt-4">Email</p>
            <input
              type="text"
              {...register("email")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />

            <p className="font-bold text-slate-400 mt-4">Username</p>
            <input
              type="text"
              {...register("username")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />
            <p className="font-bold text-slate-400 mt-4">Password</p>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                {...register("password")}
                className="rounded w-80 h-10 px-2"
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-1"
              >
                {showPassword ? <EyeOff /> : <Eye />}{" "}
              </button>
            </div>

            <p className="font-bold text-slate-400 mt-4">Address</p>
            <input
              type="text"
              {...register("address")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" className="w-26 ml-5 hover:bg-blue-700 mt-8">
            {isSubmitting ? "Submitting..." : "Update"}
          </Button>
        </form>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className=" flex flex-end mt-20 w-52 h-52 rounded-full overflow-hidden ">
          <Avatar className="w-full h-full rounded-full bg-gray-300">
            <AvatarImage src={avatarImage} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-5">
          <label htmlFor="avatarInput">
            <Camera className="size-10 cursor-pointer" color="white" />
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
