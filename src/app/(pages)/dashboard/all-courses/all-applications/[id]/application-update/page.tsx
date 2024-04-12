"use client";
import { useEffect, useState } from "react";
import { fetchApplicationById, fetchPersonDataById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { ComboboxPopover } from "@/app/ui/application/popoverStatus";
import { DialogDemo } from "@/app/ui/application/dialog-grade";
import { Application, Person, Status } from "../../../../../../lib/definitions";
import * as React from "react";
import { z } from "zod";

export default function APllicationUpdate({
  params,
}: {
  params: { id: string };
}) {
  const [application, setApplication] = useState({} as Application);
  const [student, setStudent] = useState({} as Person);
  const [grade, setGrade] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );

  const formSchema = z.object({
    status: z.string(),
    grade: z.string(),
  });

  useEffect(() => {
    const appId = params.id.replace("#", "%23");
    fetchApplicationById(appId).then((app) => {
      setApplication(app);
      const studentId = app?.student?.id.replace("#", "%23");
      fetchPersonDataById(studentId).then((student) => setStudent(student));
    });
  }, []);

  if (!application) {
    notFound();
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-2 my-2">
      <h2 className="croll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 max-w-fit">
        Update Application - {application?.course?.name} -{" "}
        {application?.student?.firstName}
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

      <div className="my-6 w-full overflow-y-auto">
        <table className="max-w-fit">
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                About you
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.aboutYou}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Previouse Knowledge
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application.prevKnowledge ? "Yes" : "No"}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Previouse Experience
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {application?.prevExperience ? "Yes" : "No"}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Status
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                <ComboboxPopover
                  open={open}
                  setOpen={setOpen}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                />
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Final Grade
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                <DialogDemo grade={grade} setGrade={setGrade} />
                {grade}
              </td>
            </tr>
            <tr>
              <button type="submit" className="btn btn-gray w-full mt-4">
                Update
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
