'use client';

import NavLinks from '@/app/ui/dashboard/nav-links';
import {X} from 'lucide-react';

interface SidenavProps {
  isHidden: boolean;
  onHide: () => void; // Function to handle hide action
}

const Sidenav: React.FC<SidenavProps> = ({ isHidden, onHide }) => {
  

  return (
    <div className={`drawer ${isHidden ? 'hidden' : 'lg:drawer-open'}`}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-row items-start justify-start ml-5 mt-5 ">
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-sm font-medium">
          {/* Handle hiding the sidenav */}
          <li onClick={onHide}>
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

export default Sidenav;
