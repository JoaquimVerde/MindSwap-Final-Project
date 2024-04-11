"use client";

import { Calendar } from "@/components/ui/calendar";
import Time from "@/app/ui/dashboard/time";
import InspirationalQuotes from "@/app/ui/dashboard/inspirational-quotes";
import { useEffect, useState } from "react";
import { fetchPersonById } from "@/app/lib/data";
import { Person } from "@/app/lib/definitions";
import { useForm } from "react-hook-form";
import { fetchData } from "next-auth/client/_utils";

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

useEffect(() => {
  const fetchData = async () => {
    try {
      const personData = await fetchPersonById();
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
}, []);

return (
  <div>
    {/* Your component's content goes here */}
  </div>
);
}

export default function Dashboard() {
  const [personData, setPersonData] = useState<Person | null>(null);

  useEffect(() => {
    fetchPersonById().then(data => {
      setPersonData(data);
    });
  }, []);

  return (
    <main>
      <div className="flex flex-row-reverse justify-between mt-10 gap-3">
        <Calendar />
        <div className="card w-118 bg-base-100 shadow-xl">
          <div className="card-body bg-white rounded-2xl text-base">
            <div className="card-actions justify-end"></div>
            <div className="flex justify-center flex-wrap sm:block">
              <InspirationalQuotes />
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body bg-white rounded-2xl text-base">
            <div className="card-actions justify-end"></div>
            <div className="flex justify-center flex-wrap sm:block text-center">
              <h2 className="pb-10 pt-10">Welcome {personData?.firstName}!</h2>
              <Time />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
