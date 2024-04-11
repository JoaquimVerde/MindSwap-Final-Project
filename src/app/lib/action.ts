'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



export async function updateCourse(
     values :
        { name?: string,
        edition?: number,
        syllabus?: string,
        program?: string,
        schedule?: string,
        price?: number,
        duration?: number,
        location?: string,
        teacherId?: string }

    , 
    courseId: string) {

        


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

export async function fetchUpdateProjectGrade(id: string, newGrade: number) {
    
    try {
        const response = await fetch(`http://localhost:8080/api/v1/projects/grade/${id}`,{
            method:'PATCH',
            headers: {
                'Content-type': 'application/josn',
            },
            body: JSON.stringify(newGrade),
    });
        if (response.ok) {
        console.log('Object updated successfully');
    } else {

        console.error('Failed to update object!', response.statusText);
    }
    } catch (error) {
    console.error('Failed to update object:', error);
    }
};

