"use client";

import { fetchPersonById } from "@/app/lib/data";
import { Person } from "@/app/lib/definitions";
import InspirationalQuotes from "@/app/ui/dashboard/inspirational-quotes";
import Time from "@/app/ui/dashboard/time";
import { Calendar } from "@/components/ui/calendar";
import { fetchData } from "next-auth/client/_utils";
import { useEffect, useState } from "react";
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
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    const user: any = session?.user;
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
  }, [session, status]);

  return <div>{/* Your component's content goes here */}</div>;
};

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const [personData, setPersonData] = useState<Person | null>(null);
  const { data: session, status } = useSession();
  const user: any = session?.user;

  useEffect(() => {
    if (status == "loading") return;
    fetchPersonById(user.id).then((data) => {
      setPersonData(data);
    });
  }, [user, status]);

  if (!personData) {
    return <div className="text-white font-bold text-2xl">Loading...</div>;
  }

  console.log(personData);

  return (
    <main>
      <div className="flex flex-row-reverse justify-between mt-10 gap-3">
        <Calendar />
        <div className="card bg-base-100 shadow-xl minSize">
          <div className="card-body bg-white rounded-2xl text-base">
            <div className="card-actions justify-end"></div>
            <div className="flex justify-center flex-wrap sm:block">
              <InspirationalQuotes />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl minSize">
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
