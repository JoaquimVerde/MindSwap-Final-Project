import { fetchCourseById } from "@/app/lib/data";
import { EditCourseForm } from "@/app/ui/courses/edit-course";
import NotFound from "../course/not-found";



export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id

    const [course] = await Promise.all([
        (fetchCourseById(id))
    ]);

    console.log(course);


    if (!course) {
        NotFound();   
    };

    return (

        <div>

            <div>Edit Course Page</div>

            <EditCourseForm course={course} />

        </div>
    );





}