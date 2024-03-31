'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { LinkType, NavLinksProps } from "@/app/lib/types";
import { useState } from "react";

export const links: LinkType[] = [
    {
         name:'My-Courses', 
         href:'/dashboard/my-courses',
         sublinks: [
            { name:'My Applied Courses', href:'/dashboard/my-courses/my-applied-courses'},
            { name:'My Enrolled Courses', href:'/dashboard/my-courses/my-enrolled-courses'},
         ]
},
    { name:'My Courses', href:'/dashboard/my-courses-teacher'},
    { name:'All Courses', href:'/dashboard/all-courses'},
    { name:'All Courses', href:'/dashboard/all-courses-teacher'},
    { name:'Profile', href:'/dashboard/profile'},
]

// const role = 'teacher';
  

// filter links based on role

// export const filteredLinks = links.filter((link) => {
//     return link.href.includes(role) && link.name === 'Profile';
//   })


export default function NavLinks() {
// export default function NavLinks({links}: NavLinksProps) {
  const [openSublinks, setOpenSublinks] = useState<string | null>(null);
  const pathname = usePathname();

  const handleClick = (linkName: string) => {
    setOpenSublinks(openSublinks === linkName ? null : linkName);
  };

  return (
    <>
        {links.map((link) => (
            <div key={link.href}>
                <details open={openSublinks === link.name} className="dropdown">
                    <summary className="m-1 btn" onClick={() => handleClick(link.name)}>{link.name}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {link.sublinks && link.sublinks.map(sublink => (
                            <li key={sublink.href}>
                                <Link href={sublink.href}>
                                    {sublink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            </div>
        ))}
    </>
);
}
