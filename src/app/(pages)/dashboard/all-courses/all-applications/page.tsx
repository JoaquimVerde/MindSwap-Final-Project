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
//import SearchBar from "@/app/ui/components/ui/search-bar";
import Link from "next/link";

export default async function AllApplications() {
  const applications = await fetchApplications();
  console.log(applications);

  return (
    <div className="mx-2 my-2">
      <div>
        <h1 className="text-2xl mb-4">All Applications</h1>
      </div>
      <div className="mt-5 ml-4 w-[800px] flex space-x-12">
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
        <TableCaption>A list of all recent applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Previouse Knowledge</TableHead>
            <TableHead>Previouse Experience </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">
                {application.student.firstName} {application.student.lastName}
              </TableCell>
              <TableCell>{application.course.name}</TableCell>
              <TableCell>{application.prevKnowledge ? "Yes" : "No"}</TableCell>
              <TableCell>{application.prevExperience ? "Yes" : "No"}</TableCell>
              <TableCell>{application.status}</TableCell>
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
