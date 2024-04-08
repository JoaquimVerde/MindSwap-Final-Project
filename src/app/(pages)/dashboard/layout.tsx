
'use client';

import React, { useState } from 'react';
import Sidenav from '@/app/ui/dashboard/sidenav';
import Navbar from "@/app/ui/dashboard/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`flex-none md:w-64 ${isCollapsed ? 'hidden' : ''}`}>
        <Sidenav isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>

      {/* Main Content */}
      <div className={`flex-grow p-6 md:overflow-y-auto md:p-12 z-20 ml-10 ${isCollapsed ? 'w-full' : 'md:w-auto'}`}>
        {children}
      </div>
    </div>
  );
}
