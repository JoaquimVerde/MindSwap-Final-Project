import React from 'react';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { Menu, X } from 'lucide-react';

export default function Sidenav() {
  const handleToggle = () => {
    const sidenav = document.querySelector<HTMLDivElement>('.drawer');
    if (sidenav) {
      sidenav.classList.toggle('hidden');
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-row items-start justify-start ml-5 mt-5 ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <Menu size="24" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-sm font-medium">
          <li onClick={handleToggle}>
            <X size="54" className="cursor-pointer flex-row" />
          </li>
          <li>
            <NavLinks />
          </li>
        </ul>
      </div>
    </div>
  );
}
