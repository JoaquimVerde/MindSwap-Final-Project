
'use client';
// Layout.tsx
import React, { useState } from 'react';
import Sidenav from '@/app/ui/dashboard/sidenav';
import Navbar from "@/app/ui/dashboard/Navbar";
import { Menu } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidenavOpen, setIsSidenavOpen] = useState(true);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className={`flex-none md:w-64 ${isSidenavOpen ? '' : 'hidden'}`}>
        {/* Pass onHide as prop */}
        <Sidenav isHidden={!isSidenavOpen} onHide={toggleSidenav} />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 z-20 ml-10">
        {/* Toggle button */}
        <Menu onClick={toggleSidenav} size="24" className='bg-white'/>
        {children}
      </div>
    </div>
  );
}
