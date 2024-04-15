"use client";

import { LinkType, LinkTypeSub } from "@/app/lib/types";
import { toPascalCase } from "@/app/lib/utils";
import {
  BookCheck,
  BookOpenText,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Home,
  LibraryBig,
  PersonStanding,
  Smile,
  UserRound,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const linkDashboard: LinkType = {
  name: ``,
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
];

// type LinkName= string;

// type HandleDivColorChange = (linkName: LinkName) => void;

// const handleDivColorChange: HandleDivColorChange = () => {

//   const div = document.querySelector<HTMLDivElement>('.link-div'); // Selecione a div pelo seletor CSS
//   if (div) {
//       div.style.backgroundColor = "bg-primary font-bold";

//   }
// }

export default function NavLinks() {
  const [openSublinks, setOpenSublinks] = useState<string | null>(null);
  const [role, setRole] = useState<string>("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    const user: any = session?.user;
    console.log("navlink User: ", user);
    const role = user && user["cognito:groups"][0];
    setRole(role);
  }, [session, status]);

  function filterLinksByRole(links: LinkType[]) {
    if (!role) return [];
    return links.filter((link) => link.role.includes(role));
  }

  //const [clickedLink, setClickedLink] = useState<LinkName | null>(null);

  return (
    <>
      <div className="link-div flex justify-start items-start w-66 hover:bg-secondary">
        <Link
          className="flex justify-start items-start pt-2 pb-2"
          key={linkDashboard.href}
          href={linkDashboard.href}
          // onClick={() => {
          //   setClickedLink(linkDashboard.name);
          //   handleDivColorChange(linkDashboard.name);
          // }}
        >
          {linkDashboard.icon && (
            <linkDashboard.icon className="flex justify-start items-start mr-2" />
          )}
          <p className="hidden md:block">{`${toPascalCase(
            role
          )}'s Dashboard`}</p>
        </Link>
      </div>


      {filterLinksByRole(links).map((link, idx) => (
        <div
          className=" link-div flex justify-start items-start w-66 hover:bg-secondary"
          key={idx}
        >
          <Link
            className="flex justify-start items-start pt-2 pb-2"
            key={link.href}
            href={link.href}
          >
            {link.icon && (
              <link.icon className="flex justify-start items-start mr-2" />
            )}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        </div>
      ))}
      {linksub.map((link, idx) => (
        <div
          className="link-div flex justify-start items-start w-66 hover:bg-secondary"
          key={idx}
        >
          {filterLinksByRole([link]).length > 0 && (
            <details open={openSublinks === link.name} className="pt-2 pb-2">
              <summary className="list-none pl-0 flex justify-between items-center">
                {link.icon && (
                  <link.icon className="flex justify-start items-start mr-2" />
                )}{" "}
                {link.name}{" "}
                {link.sublinks &&
                  (openSublinks === link.name ? (
                    <ChevronUp className="flex justify-end ml-24" />
                  ) : (
                    <ChevronDown className="flex justify-end ml-24" />
                  ))}
              </summary>
              <ul>
                {link.sublinks &&
                  link.sublinks.map((sublink) => (
                    <li key={sublink.href}>
                      <Link href={sublink.href}>
                        {sublink.icon && (
                          <sublink.icon className="flex justify-start items-start mr-2" />
                        )}{" "}
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </details>
          )}
        </div>
      ))}
    </>
  );
}
