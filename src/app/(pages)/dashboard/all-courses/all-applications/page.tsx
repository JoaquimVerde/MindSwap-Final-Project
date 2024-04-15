import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { fetchApplications, fetchPersonById } from "@/app/lib/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { ComboboxPopover } from "@/app/ui/application/popoverStatus";
// import SearchBar from "@/app/ui/components/ui/search-bar";

export default async function AllApplications() {
  const applications = await fetchApplications();


  return (
    <div className="mx-2 my-2">
      <div className="mb-10">
        <h1>All Applications</h1>
      </div>
      <div className="mt-5-w-[800px] flex justify-end space-x-12 mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Courses</SelectLabel>
              <SelectItem value="be">Back-End Developer</SelectItem>
              <SelectItem value="fe">Front-End</SelectItem>
              <SelectItem value="fs">Full-Stack</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* <SearchBar placeholder="search by student name" /> */}
      </div>
      <Table>
        <TableCaption className="text-white">A list of all recent applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-white text-lg">Name</TableHead>
            <TableHead className="font-bold text-white text-lg">Course</TableHead>
            <TableHead className="font-bold text-white text-lg">Previous Knowledge</TableHead>
            <TableHead className="font-bold text-white text-lg">Previous Experience </TableHead>
            <TableHead className="font-bold text-white text-lg">Status</TableHead>
            <TableHead className="font-bold text-white text-lg">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">
                {application.student.firstName} {application.student.lastName}
              </TableCell>
              <TableCell className="text-white">{application.course.name}</TableCell>
              <TableCell className="text-white">{application.prevKnowledge ? "Yes" : "No"}</TableCell>
              <TableCell className="text-white">{application.prevExperience ? "Yes" : "No"}</TableCell>
              <TableCell className="text-white">{application.status}</TableCell>
              <TableCell>
                <Link
                  href={`/dashboard/all-courses/all-applications/${application.id.replace(
                    "#",
                    "%23"
                  )}/application-update`}
                  id={application.id}
                >
                  Validate
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
