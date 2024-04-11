"use client";

import Link from "next/link";
import { LogOut, User, CircleUserRound} from "lucide-react";
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
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {

    const [isSticky, setIsSticky] = useState(false);  


  
  return (
    <nav
      className={` py-3 px-10 bg-black ${
        isSticky ? "sticky top-0 right-0 left-0 bg-black" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold tex-2xl cursor-pointer text-white">
          <Link href="/#home">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={60} 
              height={60} 
            />
            </Link>
        </div>
        <div className="flex flex-col items-center justify-between">
            <div className="flex flex: row items-center justify-between px-5 " >
            <DropdownMenu >
              <DropdownMenuTrigger >
                <CircleUserRound className="size-10 cursor-pointer" color="#ffffff"/>
              </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-1000 relative ml-10" style={{ right: "calc(80% - 10rem)" }}>
                  <DropdownMenuLabel>  My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer">
                       <Link
                          href={"/dashboard/profile"}
                          className=" flex flex-row items-center cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>My Profile</span>
                        </Link>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" >
                      <Link
                          href={"/" /* later => "/api/auth/signout" (?) */}
                          className=" flex flex-row items-center cursor-pointer">
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

