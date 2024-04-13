import { Button } from "@/components/ui/button";
import {
  ApplyCourse,
  EditCourse,
  ViewProjects,
} from "@/app/ui/courses/buttons";
import { fetchCourseById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import SortByRoleButtons from "@/app/ui/components/ui/sort-by-role-buttons";

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;

  
  const course = await fetchCourseById(id);
  if (!course) {
    notFound();
  }

  const vacancies = course.maxStudents-course.enrolledStudents;

  return (
    <div className="mx-2 my-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 max-w-fit">
        {course?.name}
      </h2>

      <div className="my-6 w-full overflow-y-auto">
        <table className="max-w-fit">
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Teacher
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {course.teacher?.firstName} {course.teacher?.lastName}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Schedule
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {course.schedule}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Location
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {course.location}
              </td>
            </tr>
            { <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Vacancies
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {vacancies}
              </td>
            </tr> }
          </tbody>
        </table>
      </div>

      <div className="mx-2 my-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
          Program
        </h3>
        <div>
          {course.program.split("\n").map((line, index) => (
            <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-5 max-w-fit">
        <SortByRoleButtons id={id} />
      </div>
    </div>
  );
}
