"use client";
// Layout.tsx
import React, { useState } from "react";
import Sidenav from "@/app/ui/dashboard/sidenav";
import { Menu } from "lucide-react";
import Navbar from "@/app/ui/dashboard/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidenavOpen, setIsSidenavOpen] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
    setIsHidden(!isHidden);
  };

  return (
    <>
    <Navbar/>
    <div className="flex h-screen bg-secondary">
      {/* Sidebar */}
      <div className={`flex-none md:w-64 ${isSidenavOpen ? "" : "hidden"}`}>
        {/* Pass onHide as prop */}
        <Sidenav isHidden={!isSidenavOpen} onHide={toggleSidenav} />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 ml-10 bg-secondary">
        {/* Toggle button */}
        {isHidden && (
          <Menu
            onClick={toggleSidenav}
            size="24"
            className="relative my-0 mb-6 getLeft text-white"
          />
        )}
        {children}
      </div>
    </div>
    </>
  );
}