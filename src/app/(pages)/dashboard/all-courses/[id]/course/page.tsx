import { Button } from "@/components/ui/button";
import {
  ApplyCourse,
  EditCourse,
  ViewProjects,
} from "@/app/ui/courses/buttons";
import { fetchCourseById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const course = await Promise.all([fetchCourseById(id)]);

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-2 my-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 max-w-fit">
        {course[0]?.name}
      </h2>

      <div className="my-6 w-full overflow-y-auto">
        <table className="max-w-fit">
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Teacher
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {course[0]?.teacher?.firstName} {course[0]?.teacher?.lastName}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Schedule
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {course[0]?.schedule}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Location
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {course[0]?.location}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mx-2 my-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
          Program
        </h3>
        <div>
          {course[0]?.program.split("\n").map((line, index) => (
            <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-5 max-w-fit">
        <Button>
          <ViewProjects id={id} />
        </Button>
        <Button>
          <ApplyCourse id={id} />
        </Button>
        <Button>
          <EditCourse id={id} />
        </Button>
      </div>
    </div>
  );
}
