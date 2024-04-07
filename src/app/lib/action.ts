'use server';

import { Course } from "./definitions";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function updateCourse(course: Course[]) {

    fetch(`http://localhost:8080/api/v1/courses/${course[0]?.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            title: course[0]?.name,
            edition: course[0]?.edition,
            syllabus: course[0]?.syllabus,
            program: course[0]?.program,
            schedule: course[0]?.schedule,
            price: course[0]?.price,
            duration: course[0]?.duration,
            location: course[0]?.location,
            teacherId: course[0]?.teacher?.id,
        })
    })
        .then((response) => {
            console.log(response);
            if (response.status !== 200) {
                throw new Error("something went wrong");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error ", error);

        });
    console.log(course[0].id)
    revalidatePath(`/dashboard/all-courses/${course[0].id.replace("#", "%23")}/course`);
    redirect(`/dashboard/all-courses/${course[0].id.replace("#", "%23")}/course`);
}