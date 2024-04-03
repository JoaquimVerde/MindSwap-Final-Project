import { Button } from "@/components/ui/button";
import { CircuitBoard, Smile } from "lucide-react";


export default async function Course() {


    // fazer fetchCourseById (data.ts)

    return (
        <div className="mx-2 my-2">


            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 max-w-fit">
                (Course Name)
            </h2>

            <div className="my-6 w-full overflow-y-auto">
                <table className="max-w-fit">
                    <tbody>
                        <tr className="m-0 border-t p-0 even:bg-muted">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Teacher
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                (Teacher Name)
                            </td>
                        </tr>
                        <tr className="m-0 border-t p-0 even:bg-muted">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Schedule
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                (Course Schedule)
                            </td>
                        </tr>
                        <tr className="m-0 border-t p-0 even:bg-muted">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Location
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                (Course Location)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mx-2 my-10">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Program
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    (Course Program)
                </p>
            </div>

            <div className="flex flex-col space-y-5 max-w-fit">
                <Button>View Syllabus <CircuitBoard className="ml-3" /></Button>
                <Button>Apply Now <Smile className="ml-3" /></Button>
            </div>


        </div>
    )
}