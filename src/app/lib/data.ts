// data fetching methods go here
// e.g. get all courses; get all users

import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { Application, Course, Person, Project } from "./definitions";
import { useSession } from "next-auth/react";

export async function fetchAllCourses(): Promise<number> {
  noStore();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses`);
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const courses: Course[] = await response.json();
    //console.log(courses);

    return courses.length;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch all courses.");
  }
}

export async function fetchCoursesByPage(
  currentPage: number
): Promise<Course[]> {
  noStore();
  try {
    //await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses?page=${
        currentPage - 1
      }&limit=6`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const courses: Course[] = await response.json();
    //console.log(courses);

    return courses;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch all courses.");
  }
}

export async function fetchCourseById(id: string): Promise<Course | null> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses/${id}`
    );
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const course: Course = await response.json();

    return course;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch course.");
  }
}

export async function fetchProjectsByCourseId(id: string): Promise<Project[]> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/projects/course/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects!");
    }
    const projects: Project[] = await response.json();
    console.log(projects);

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    notFound();
  }
}

export async function fetchPersonById(id1: string): Promise<Person> {
  noStore();
  try {
    const id = "PERSON#" + id1;
    console.log(id);
    if (!id) {
      throw new Error("Id not found in session storage");
    }
    const encodedId = id.replace(/#/g, "%23");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/${encodedId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const person: Person = await response.json();
    console.log(person);
    return person;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch person.");
  }
}

export async function fetchCoursesByLocation(
  location: string,
  currentPage: number
): Promise<Course[]> {
  noStore();
  try {
    console.log("fetching...");

    //await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses/location/${location}?page=${
        currentPage - 1
      }&limit=6`
    );
    if (!response.ok) {
      throw new Error("Response not ok - Failed to fetch courses!!!");
    }
    const courses: Course[] = await response.json();
    console.log(courses);

    return courses;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch all courses.");
  }
}

export async function fetchPersonByEmail(email: string): Promise<Person> {
  noStore();
  try {
    if (!email) {
      throw new Error("Email not found in session storage");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/email/${email}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch person");
    }
    const person: Person = await response.json();
    console.log(person);

    return person;
  } catch (error) {
    console.error("Error fetching person:", error);
    notFound();
  }
}

export async function fetchRole(): Promise<string> {
  noStore();

  try {
    const role = "STUDENT";

    if (!role) {
      throw new Error("Role not found in session storage.");
    }

    return role as string;
  } catch (error) {
    console.error("FetchError:", error);
    throw new Error("Failed to fetch role.");
  }
}

export async function fetchApplications(): Promise<Application[]> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch applications");
    }
    const applications: Application[] = await response.json();
    console.log(applications);

    return applications;
  } catch (error) {
    console.error("Error fetching applications:", error);
    return [];
  }
}

export async function fetchApplicationById(id: string): Promise<Application> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch application");
    }

    const application: Application = await response.json();
    console.log(application);

    return application;
  } catch (error) {
    console.error("Error fetching application:", error);
    notFound();
  }
}

export async function fetchAllCoursesFromLocation(
  location: string
): Promise<number> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses/location/${location}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const courses: Course[] = await response.json();
    //console.log(courses);

    return courses.length;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch all courses.");
  }
}

export async function getPersonByRole(role: string): Promise<Person[]> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/role/${role}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch persons");
    }
    const persons: Person[] = await response.json();
    console.log(persons);

    return persons;
  } catch (error) {
    console.error("Error fetching persons:", error);
    return [];
  }
}

export async function fetchProjectById(id: string): Promise<Project> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/projects/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const project: Project = await response.json();
    //console.log(proj);

    return project;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch project.");
  }
}

export async function fetchProjectByStudentId(id: string): Promise<Project[]> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/projects/person/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const projects: Project[] = await response.json();
    //console.log(projects);

    return projects;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch project.");
  }
}

export async function fetchAllApplicationsById(
  statuses: string[],
  idCode: string
): Promise<Application[]> {
  noStore();
  try {
    const id = "PERSON#" + idCode;
    if (!id) {
      throw new Error("Id not found in session storage");
    }
    const encodedId = id.replace(/#/g, "%23");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration/student/${encodedId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch all student applications");
    }

    const applications: Application[] = await response.json();
    const filteredApplications = applications.filter((app) =>
      statuses.includes(app.status)
    );

    return filteredApplications;
  } catch (error) {
    console.error("Error fetching applications:", error);
    notFound();
  }
}

export async function fetchPersonDataById(id: string): Promise<Person> {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch a person");
    }
    const person: Person = await response.json();
    console.log(person);
    return person;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch person.");
  }
}

export async function fetchCoursesByTeacherId(idCode: string): Promise<Course[]> {
  try {
    const id = "PERSON#" + idCode;
    if (!id) {
      throw new Error("Id not found in session storage");
    }
    const encodedId = id.replace(/#/g, "%23");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses/teacher/${encodedId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch courses by teacher id");
    }

    const courses: Course[] = await response.json();
    return courses;
  } catch (error) {
    console.error("Error fetching courses by teacher id:", error);
    throw error;
  }
}

export async function fetchRoleByPersonId(): Promise<string> {
  const { data: session, status } = useSession();
  const user: any = session?.user;
  try {
    const id = user.id;
    if (!id) {
      throw new Error("Id not found in session storage");
    }
    const encodedId = id.replace(/#/g, "%23");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/${encodedId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch person");
    }

    const person: Person = await response.json();
    console.log(person);
    const role = person.role;
    console.log(person.role);

    if (!role) {
      throw new Error("Role not found in person data");
    }

    return role;
  } catch (error) {
    console.error("Error fetching role:", error);
    throw new Error("Failed to fetch role.");
  }
}

export async function fetchUpdateProjectGrade(id: string, newGrade: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/projects/grade/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ grade: newGrade }),
      }
    );
    if (response.ok) {
      console.log("Grade updated successfully");
    } else {
      console.error("Failed to update grade!", response.statusText);
    }
  } catch (error) {
    console.error("Failed to update grade:", error);
  }
}

export async function deleteApplicationById(id: string) {
  try {
    let encodedId = id.replace("#", "%23");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration/${encodedId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete application");
    }
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to delete application.");
  }
}
export async function deletePersonById(id: string) {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons/${id.replace("#", "%23")}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete a person");
    }
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to delete person.");
  }
}

export async function fetchUpdateApplicationGrade(id: string, newGrade: number) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration/grade/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ grade: newGrade }),
    });
    if (response.ok) {
      console.log("Grade updated successfully");
      return response.json();
    } else {
      console.error("Failed to update grade!", response.statusText);
    }
  } catch (error) {
    console.error("Failed to update grade:", error);
  }
}

export async function fetchUpdateApplicationStatus(
  id: string,
  newStatus: string
): Promise<Response> {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration/status/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ status: newStatus }),
  });
}
