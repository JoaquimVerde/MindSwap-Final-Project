// data fetching methods go here
// e.g. get all courses; get all users


import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { Course, Person, Project, Application } from "./definitions";


export async function fetchAllCourses(): Promise<number> {
  noStore();
  try {
    const response = await fetch(`http://localhost:8080/api/v1/courses`);
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
      `http://localhost:8080/api/v1/courses?page=${currentPage - 1}&limit=4`
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

export async function fetchCourseById(id: string): Promise<Course> {
  noStore();
  try {
    const response = await fetch(`http://localhost:8080/api/v1/courses/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const course: Course = await response.json();
    //console.log(course);

    return course;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch course.");
  }
}


export async function fetchProjectsByCourseId(
  id: string
): Promise<Project[]> {
  noStore();
  try {

    const response = await fetch(
      `http://localhost:8080/api/v1/projects/course/${id}`
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


  export async function fetchPersonById(): Promise<Person> {
    noStore();
    try {
      const id = sessionStorage.getItem('userId');
      console.log(id);
    if (!id) {
      throw new Error('Id not found in session storage');
    }
      const encodedId = id.replace(/#/g, "%23");

      const response = await fetch(
        `http://localhost:8080/api/v1/persons/${encodedId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const person: Person = await response.json();
      console.log(person);
      return person;
  }
  catch (error) {
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
    await new Promise((resolve) => setTimeout(resolve, 3000));


    const response = await fetch(
      `http://localhost:8080/api/v1/courses/location/${location}?limit=4&page=${currentPage - 1}`
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

export async function fetchPersonByEmail(): Promise<Person> {
  noStore();
  try {
    const email = sessionStorage.getItem('email');
    if (!email) {
      throw new Error('Email not found in session storage');
    }

    const response = await fetch(
      `http://localhost:8080/api/v1/persons/email/${email}`
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

    const role = sessionStorage.getItem('userRole');

    if (!role) {
      throw new Error('Role not found in session storage.');
    }

    return role;

  } catch (error) {
    console.error('FetchError:', error);
    throw new Error('Failed to fetch role.');
  }
}


export async function fetchApplications(): Promise<Application[]> {
  noStore();
  try {
    const response = await fetch(`http://localhost:8080/api/v1/registration`);
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
      `http://localhost:8080/api/v1/registration/${id}`
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

