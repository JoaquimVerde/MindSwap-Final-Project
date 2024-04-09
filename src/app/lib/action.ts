'use server';

import { Course, CourseForm } from "./definitions";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



export async function updateCourse(values: any, courseId: string ) {

    console.log(courseId);

    fetch(`http://localhost:8080/api/v1/courses/${courseId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": sessionStorage.getItem("token"),
        },
        body: JSON.stringify(values)
    })
        .then((response) => {
            console.log(response);
            if (response.status !== 200) {
                throw new Error("something went wrong!!!");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error ", error);

        });
    revalidatePath(`/dashboard/all-courses/${courseId}/course`);
    redirect(`/dashboard/all-courses/${courseId}/course`);
}

