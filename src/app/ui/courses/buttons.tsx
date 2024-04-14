import Link from "next/link";
import { ChevronsRight, Smile, Edit, CircuitBoard } from "lucide-react";
import { LinkType } from "@/app/lib/types";

export function GetCourseInfo({ id, role }: { id: string, role: string | undefined }) {
  return (
    <Link
      className="flex items-center p-0 pt-0"
      href={`/dashboard/${role}/all-courses/${id}/course`}
    >
      {" "}
      More Info <ChevronsRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

export function ApplyCourse({ id }: { id: string }) {
  return (
    <Link
      className="flex items-center p-0 pt-0"
      href={`/dashboard/all-courses/${id}/application`}
    >
      {" "}
      Apply Now <Smile className="ml-3" />
    </Link>
  );
}

export function EditCourse({ id, role }: { id: string, role: string | undefined }) {
  return (
    <Link
      className="flex items-center p-0 pt-0"
      href={`/dashboard/${role}/all-courses/${id}/edit`}
    >
      {" "}
      Edit Course <Edit className="ml-3" />
    </Link>
  );
}

export function ViewProjects({ id }: { id: string }) {
  return (
    <Link
      className="flex items-center p-0 pt-0"
      href={`/dashboard/all-courses/${id}/projects`}
    >
      {" "}
      View Projects <CircuitBoard className="ml-3" />
    </Link>
  );
}

export function NavLink({ role, link }: { role: string | null, link: LinkType }) {
  return (
    <Link className="flex justify-start items-start pt-2 pb-2" key={link.href} href={`/dashboard/${role}/all-courses`}>
      {link.icon && <link.icon className="flex justify-start items-start mr-2" />}
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
}
