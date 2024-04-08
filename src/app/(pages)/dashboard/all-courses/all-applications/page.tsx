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

export default async function AllApplcations() {
  const applications = await fetchAppliations();
  //const person = await fetchPersonById(applications[0].personId);

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
            <TableHead>Previouse Knowledge</TableHead>
            <TableHead>Previouse Experience </TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">Maria Alves</TableCell>
              <TableCell>{application.prevKnowledge ? "Yes" : "No"}</TableCell>
              <TableCell>{application.prevExperience ? "Yes" : "No"}</TableCell>
              <TableCell className="text-right">{application.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}
