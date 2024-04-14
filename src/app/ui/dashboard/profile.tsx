"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { Camera, Eye, EyeOff } from "lucide-react";
import { Person } from "@/app/lib/definitions";
import { fetchPersonById } from "@/app/lib/data";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

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
  const { data: session, status } = useSession();
  const user: any = session?.user;

  useEffect(() => {
    if (status === "loading") return
    const fetchFromS3 = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/s3/getProfileImage/${user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "*/*",
            },
          }
        );
        if (response.ok) {
          const blob = await response.blob();
          const reader = new FileReader();
          const url = URL.createObjectURL(blob);
          console.log("url", url);
          console.log("blib", blob);
          reader.onloadend = () => {
            if (reader.result) {
              setAvatarImage(reader.result.toString());
            }
          };
          reader.readAsDataURL(blob);
        }
      } catch (error) {
        console.error("Error fetching avatar image:", error);
      }
    }
    const fetchData = async () => {
      try {
        const personData = await fetchPersonById(user.id);
        setValue("firstName", personData.firstName);
        setValue("lastName", personData.lastName);
        setValue("username", personData.username);
        setValue("email", personData.email);
        setValue("role", personData.role);
        setValue("dateOfBirth", personData.dateOfBirth);
        setValue("address", personData.address);
        setValue("cv", personData.cv);
        // setAvatarImage(personData.avatarImage); Add avatar image??
      } catch (error) {
        console.error("Error fetching person:", error);
      }
    };

    fetchData();
    fetchFromS3();
  }, [session, status]);

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
      const userId = "PERSON#" + user?.id;
      if (!userId) {
        throw new Error("User Id not found in session storage");
      }
      const encodedId = userId.replace(/#/g, "%23");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/${encodedId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, id: userId }),
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
              disabled={true}
            />

            <p className="font-bold text-slate-400 mt-4">Username</p>
            <input
              type="text"
              {...register("username")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />
            <p className="font-bold text-slate-400 mt-4">Address</p>
            <input
              type="text"
              {...register("address")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />
            <p className="font-bold text-slate-400 mt-4">CV</p>
            <input
              type="text"
              {...register("cv")}
              className="rounded w-80 h-10 px-2"
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" className="w-26 ml-0 hover:bg-blue-700 mt-8">
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
