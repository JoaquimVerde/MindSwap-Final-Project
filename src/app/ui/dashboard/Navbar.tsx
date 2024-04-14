"use client";

import { fetchPersonById } from "@/app/lib/data";
import { Person } from "@/app/lib/definitions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, LogOut, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
    const fetchData = async () => {
      const user: any = session?.user;
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
  }, []);

  return <div>{/* Your component's content goes here */}</div>;
};

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [personData, setPersonData] = useState<Person | null>(null);
  const { data: session, status } = useSession();
  const user: any = session?.user;

  useEffect(() => {
    if(status === "loading") return;
    fetchPersonById(user.id).then((data) => {
      setPersonData(data);
    });
  }, [session, status]);

  return (
    <nav
      className={` py-3 px-10 bg-primary ${
        isSticky ? "sticky top-0 right-0 left-0 bg-black" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold tex-2xl cursor-pointer text-white">
          <Link href="/#home">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex: row items-center justify-between px-5 ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleUserRound
                  className="size-10 cursor-pointer"
                  color="#ffffff"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 z-1000 relative ml-10"
                style={{ right: "calc(80% - 10rem)" }}
              >
                <DropdownMenuLabel>
                  {" "}
                  {personData?.firstName} {personData?.lastName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer">
                    <Link
                      href={"/dashboard/profile"}
                      className=" flex flex-row items-center cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Link
                    href={"/" /* later => "/api/auth/signout" (?) */}
                    className=" flex flex-row items-center cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
