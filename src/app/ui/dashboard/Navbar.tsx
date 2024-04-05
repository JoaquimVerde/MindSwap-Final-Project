"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { fetchPersonById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default function Navbar() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);  


 
    

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };


    window.addEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <nav
      className={` py-4 md:px-8 px-4 bg-black ${
        isSticky ? "sticky top-0 right-0 left-0 bg-black" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold tex-2xl cursor-pointer text-white">
          <Link href="/#home">Logo</Link>
        </div>


      
        <div className="flex flex-col items-center justify-between">
            <div className="flex flex: row items-center justify-between">
            <CircleUserRound className="size-12 cursor-pointer" color="#ffffff" onClick={toggleMenu} /> 
            </div>
            {isMenuOpen && (
            <div className="flex flex-col  absolute right-8 mt-12 w-48 bg-white border rounded-lg shadow-lg z-50">
                 <h2 className="px-15 py-5 text-sm text-gray-1000 flex justify-center">First and Last Name</h2>

                <Link
                  className="px-10 py-3 text-sm text-700 hover:bg-gray-100"
                  href={"/dashboard/profile"}
                >
                  <div className="flex justify-center">My Profile</div>
                </Link>
                 <Link
                  className="flex flex-row justify-center justify-between items-center px-10 py-3 text-sm text-700 hover:bg-gray-100"
                  href={"/" /* later => "/api/auth/signout" (?) */}
                  >
                  <div className="md:block">Sign Out</div>
                  <LogOut className="w-6" />
                </Link>
            </div>
            )}
        </div>
      </div>

    </nav>
  );
}
