import { fetchProjectsByCourseId } from "@/app/lib/data";
import { notFound } from "next/navigation";



export default async function Page({params} : {params: { id: string}}) {
    const id = params.id;

    // const project = await Promise.all([
    //     (fetchProjectsByCourseId(id))
    // ]);

    // if (!project) {
    //     notFound();
    // };

    return (
        <div className="mx-2 my-2">
            <h2 className= "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 max-w-fit">
                Projects
            </h2>

            <div className="my-6 w-full overflow-y-auto">
                <table className="max-w-fit">
                    <tbody>
                        <tr className="m-0 border-t p-0 even:bg-muted">
                           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Snake Game
                            </td> 
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Students
                            </td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )

}