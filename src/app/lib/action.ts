'use server';

import { Course, CourseForm } from "./definitions";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function updateCourse(course : CourseForm) {

    console.log(course.name);

    fetch(`http://localhost:8080/api/v1/courses/${course?.id.replace("#", "%23")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            name: course?.name,
            edition: course?.edition,
            syllabus: course?.syllabus,
            program: course?.program,
            schedule: course?.schedule,
            price: course?.price,
            duration: course?.duration,
            location: course?.location,
            teacherId: course?.teacher,
        })
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
    revalidatePath(`/dashboard/all-courses/${course.id.replace("#", "%23")}/course`);
    redirect(`/dashboard/all-courses/${course.id.replace("#", "%23")}/course`);
}

