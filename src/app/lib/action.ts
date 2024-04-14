"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateCourse(
  values: {
    name?: string;
    edition?: number;
    syllabus?: string;
    program?: string;
    schedule?: string;
    price?: number;
    duration?: number;
    location?: string;
    teacherId?: string;
  },
  courseId: string
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses/${courseId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );
  if (response.status === 200) {
    revalidatePath(`/dashboard/all-courses/${courseId}/course`);
    redirect(`/dashboard/all-courses/${courseId}/course`);
  } else {
    revalidatePath(`/dashboard/all-courses/${courseId}/course`);
    redirect(`/dashboard/all-courses/${courseId}/course`);
  }

  // .then((response) => {
  //   //console.log(response);
  //   if (response.status !== 200) {
  //     throw new Error("something went wrong!!!");
  //   }
  //   revalidatePath(`/dashboard/all-courses/${courseId}/course`);
  //   redirect(`/dashboard/all-courses/${courseId}/course`);
  // })
  // .catch((error) => {
  //   console.error("Error ", error);
  //   revalidatePath(`/dashboard/all-courses/${courseId}/course`);
  //   redirect(`/dashboard/all-courses/${courseId}/course`);
  // });
}

export async function fetchUpdateProjectGrade(id: string, newGrade: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/projects/grade/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/josn",
        },
        body: JSON.stringify(newGrade),
      }
    );
    if (response.ok) {
      console.log("Object updated successfully");
    } else {
      console.error("Failed to update object!", response.statusText);
    }
  } catch (error) {
    console.error("Failed to update object:", error);
  }
}

export async function updateApplication(
  values: { grade?: number; status?: string },

  appId: string
) {
  fetch(`${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration/${appId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      //console.log(response);
      if (response.status !== 200) {
        throw new Error("something went wrong!!!");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error ", error);
    });
  revalidatePath(
    `/dashboard/all-courses/all-applications/${appId}/application-update`
  );
  redirect(`/dashboard/all-courses/${appId}/application-update`);
}
