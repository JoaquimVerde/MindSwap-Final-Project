"use client";

import Link from "next/link";
import { LinkType, NavLinksProps } from "@/app/lib/types";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { UserRound } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { BookCheck } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { LibraryBig } from "lucide-react";

export const links: LinkType[] = [
  {
    name: "My-Courses",
    href: "/dashboard/my-courses",
    icon: BookOpenText,
    role: ["student", "admin"],
    sublinks: [
      {
        name: "My Applied Courses",
        href: "/dashboard/my-courses/my-applied-courses",
        icon: BookCheck,
      },
      {
        name: "My Enrolled Courses",
        href: "/dashboard/my-courses/my-enrolled-courses",
        icon: GraduationCap,
      },
    ],
  },
  {
    name: "My Courses",
    href: "/dashboard/my-courses-teacher",
    icon: BookOpenText,
    role: ["teacher", "admin"],
  },
  { name: "All Courses", href: "/dashboard/all-courses", icon: LibraryBig },
  { name: "All Courses", href: "/dashboard/all-courses-teacher", icon: LibraryBig },
  { name: "Profile", href: "/dashboard/profile", icon: UserRound },
];

// filter links based on role

// const role = "teacher";
//   export const filteredLinks = links.filter((link) => {
//     return link.href.includes(role) && link.name === 'Profile';
//   })

export default function NavLinks() {
  const [openSublinks, setOpenSublinks] = useState<string | null>(null);

  const handleClick = (
    linkName: string,
    linkHref: string,
    sublinks: { name: string; href: string, icon?: any }[] | undefined,
    event: any
  ) => {
    if (!sublinks || sublinks.length === 0) {
      window.location.href = linkHref;
    } else {
      // if both sublinks are empty, return a message => whomever is responsible for My-Courses Page should implement it.
      setOpenSublinks(openSublinks === linkName ? null : linkName);
      event.preventDefault();
    }

  };

  return (
    <>
      {links.map((link) => (
        // write the code to test the role    
        <div className="flex justify-start items-start p-4"
        key={link.href}
        onClick={(event) =>
            handleClick(link.name, link.href, link.sublinks, event)
        }
        >
          {link.icon && <link.icon className="flex justify-start items-start"/>}  
          <details open={openSublinks === link.name}>
            <summary style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>{link.name} {link.sublinks && (openSublinks === link.name ? <ChevronUp style={{justifyContent: 'flex-end', marginLeft: '7rem'}}/> : <ChevronDown style={{justifyContent: 'flex-end', marginLeft: '7rem'}}/>)}</summary>
            <ul>
              {link.sublinks &&
                link.sublinks.map((sublink) => (
                  <li key={sublink.href}>
                    <Link href={sublink.href}>{sublink.icon && <sublink.icon className="flex justify-start items-start m-2"/>} { sublink.name}</Link>
                  </li>
                ))}
            </ul>
          </details>
        </div>
      ))}
    </>
  );
}
