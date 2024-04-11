import { fetchApplicationById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function APllicationUpdate({
  params,
}: {
  params: { id: string };
}) {
  const appId = params.id.replace("#", "%23");

  const application = await fetchApplicationById(appId);

  if (!application) {
    notFound();
  }

  return (
    <div className="mx-2 my-2">
      <h2 className="croll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 max-w-fit">
        Update Application
      </h2>
      <div className="my-6 w-full overflow-y-auto">
        <table className="max-w-fit">
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Student
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.student?.firstName}{" "}
                {application?.student?.lastName}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Email
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.student?.email}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Username
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.student?.username}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Date of Birth
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.student?.dateOfBirth}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Adress
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.student?.address}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>About you</TableHead>
            <TableHead>Previouse Knowledge</TableHead>
            <TableHead>Previouse Experience </TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Final Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableRow>
          <TableHead>{application?.aboutYou}</TableHead>
          <TableHead>{application?.prevKnowledge}</TableHead>
          <TableHead>{application?.prevExperience} </TableHead>
          <TableHead>{application?.course?.name}</TableHead>
          <TableHead>{application?.status}</TableHead>
          <TableHead>{application?.finalGrade}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead></TableHead>
          <TableHead></TableHead>
          <TableHead> </TableHead>
          <TableHead></TableHead>
          <TableHead>{application?.finalGrade}</TableHead>
          <TableHead>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Grade</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Grade</DialogTitle>
                  <DialogDescription>
                    Insert the final grade to {application.student.firstName}{" "}
                    {application.student.lastName}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Final Grade
                    </Label>
                    <Input
                      type="number"
                      id="grade"
                      defaultValue="number"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TableHead>
        </TableRow>
      </Table>

      {/* <div>
        Student Information
        <div>
         
          About You: {application?.aboutYou}
          Previous Knowledge: {application?.prevKnowledge}
          Previous Experience: {application?.prevExperience}
          Final Grade: {application?.finalGrade}
          
        </div>
      </div>
      <div>
        Course Information
        <div>
          Applied Course: {application?.course?.name}
          Applied Course Location: {application?.course?.location}
        </div>
      </div>
      <div>Status: {application?.status}</div> */}
    </div>
  );
}
