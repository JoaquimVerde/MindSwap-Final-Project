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
import { fetchAppliations, fetchPersonById } from "@/app/lib/data";

export default async function AllApplications() {
  const applications = await fetchAppliations();

  return (
    <div className="mx-2 my-2">
      <div>
        <h1 className="text-2xl mb-4">All Applications</h1>
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
