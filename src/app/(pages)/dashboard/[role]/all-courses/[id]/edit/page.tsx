import { fetchCourseById } from "@/app/lib/data";
import { EditCourseForm } from "@/app/ui/courses/edit-course";
import { notFound } from "next/navigation";




export default async function Page(
    { params 
    }: { 
        params: {
             id: string, 
            role?: string
        } 
    }) {

    const id = params.id;
    const role = params.role;

    const [course] = await Promise.all([
        (fetchCourseById(id))
    ]);

    console.log(course);


    if (!course) {
        notFound();   
    };

    return (

        <div>

            <div>Edit Course Page</div>

            <EditCourseForm course={course} role={role} />

        </div>
    );





}