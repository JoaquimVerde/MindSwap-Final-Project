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
  UserRound,
  LibraryBig,
  PersonStanding,
  Smile,
  Home,
} from "lucide-react";
import { fetchRole } from "@/app/lib/data"; 
import { toPascalCase } from "@/app/lib/utils";

export const linkDashboard: LinkType = {
  name: `${toPascalCase(sessionStorage?.userRole ?? '?')}'s Dashboard`,
  href: "/dashboard",
  icon: Home,
  role: ["STUDENT", "TEACHER", "ADMIN"],
};

export const linksub: LinkTypeSub[] = [
  {
    name: "My-Courses",
    href: "/dashboard/my-courses",
    icon: BookOpenText,
    role: ["STUDENT"],
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
    role: ["TEACHER"],
  },
  {
    name: "All Courses",
    href: "/dashboard/all-courses",
    icon: LibraryBig,
    role: ["STUDENT", "ADMIN"],
  },
  {
    name: "All Applications",
    href: "/dashboard/all-courses/all-applications",
    icon: BookCheck,
    role: ["ADMIN"],
  },
  {
    name: "All Staff",
    href: "/dashboard/all-staff",
    icon: PersonStanding,
    role: ["ADMIN"],
  },
  {
    name: "All Students",
    href: "/dashboard/all-students",
    icon: Smile,
    role: ["ADMIN"],
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: UserRound,
    role: [],
  }
];

export default function NavLinks() {
  const [openSublinks, setOpenSublinks] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPersonRole() {
      try {
        const fetchedRole: string = await fetchRole();
        setRole(fetchedRole);
      } catch (error) {
        console.error('Failed to fetch role:', error);
      }
    }

    fetchPersonRole();
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

      

      {filterLinksByRole(links).map((link, idx) => (
        <div className="flex justify-start items-start" key={idx}>
          <Link className="flex justify-start items-start pt-2 pb-2" key={link.href} href={link.href}>
            {link.icon && <link.icon className="flex justify-start items-start mr-2" />}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        </div>
      ))}
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
      )
      )}
    </>
  );
}
