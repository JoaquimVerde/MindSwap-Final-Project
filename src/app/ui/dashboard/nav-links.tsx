'use client';

import Link from "next/link";
import { LinkType, LinkTypeSub } from "@/app/lib/types";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  BookCheck,
  BookOpenText,
  LibraryBig,
  Home,
  UserRound,
} from "lucide-react";
import { fetchPersonByRole } from "@/app/api/dashboard/route"; 

export const linkDashboard: LinkType = {
  name: "Dashboard",
  href: "/dashboard",
  icon: Home,
  role: ["student", "teacher", "admin"],
};

export const linksub: LinkTypeSub[] = [
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
];

export const links: LinkType[] = [
  {
    name: "My Courses",
    href: "/dashboard/my-courses-teacher",
    icon: BookOpenText,
    role: ["teacher", "admin"],
  },
  {
    name: "All Courses",
    href: "/dashboard/all-courses",
    icon: LibraryBig,
    role: ["student", "admin"],
  },
  {
    name: "All Courses",
    href: "/dashboard/all-courses-teacher",
    icon: LibraryBig,
    role: ["teacher", "admin"],
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: UserRound,
    role: ["student", "admin", "teacher"],
  },
  {
    name: "All Applications",
    href: "/dashboard/all-courses/all-applications",
    icon: BookCheck,
    role: ["admin", "teacher"],
  },
];

export default function NavLinks() {
  const [openSublinks, setOpenSublinks] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRole() {
      try {
        const fetchedRole = await fetchPersonByRole();
        setRole(fetchedRole);
      } catch (error) {
        console.error('Failed to fetch role:', error);
        // Handle error
      }
    }

    fetchRole();
  }, []);

  function filterLinksByRole(links: LinkType[]) {
    if (!role) return [];
    return links.filter((link) => link.role.includes(role));
  }

  return (
    <>
      <div className="flex justify-start items-start">
        <Link className="flex justify-start items-start pt-2 pb-2" key={linkDashboard.href} href={linkDashboard.href}>
          {linkDashboard.icon && <linkDashboard.icon className="flex justify-start items-start mr-2" />}
          <p className="hidden md:block">{linkDashboard.name}</p>
        </Link>
      </div>

      {linksub.map((link, idx) => (
        <div className="flex justify-start items-start" key={idx}>
          {filterLinksByRole([link]).length > 0 && (
            <details open={openSublinks === link.name} className="pt-2 pb-2">
              <summary className="list-none pl-0 flex justify-between items-center">
                {link.icon && <link.icon className="flex justify-start items-start mr-2" />} {link.name}{" "}
                {link.sublinks &&
                  (openSublinks === link.name ? (
                    <ChevronUp className="flex justify-end ml-28" />
                  ) : (
                    <ChevronDown className="flex justify-end ml-28" />
                  ))}
              </summary>
              <ul>
                {link.sublinks &&
                  link.sublinks.map((sublink) => (
                    <li key={sublink.href}>
                      <Link href={sublink.href}>
                        {sublink.icon && <sublink.icon className="flex justify-start items-start mr-2" />}{" "}
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </details>
          )}
        </div>
      ))}

      {filterLinksByRole(links).map((link, idx) => (
        <div className="flex justify-start items-start" key={idx}>
          <Link className="flex justify-start items-start pt-2 pb-2" key={link.href} href={link.href}>
            {link.icon && <link.icon className="flex justify-start items-start mr-2" />}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
