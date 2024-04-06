import { fetchCourseById } from "@/app/lib/data";
import { EditCourseForm } from "@/app/ui/courses/edit-course";



export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id

    const course = await Promise.all([
        (fetchCourseById(id))
    ]);

    console.log(course);


   


    return (

        <div>

            <div>Edit Course Page</div>

            <EditCourseForm course={course} />


        

        </div>
    );





}