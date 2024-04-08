// data fetching methods go here
// e.g. get all courses; get all users

import { notFound } from 'next/navigation';
import { Course, Person } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';




export async function fetchCourses(): Promise<Course[]> {
    noStore();
    try {
        const response = await fetch(`http://localhost:8080/api/v1/courses`);
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        const courses: Course[] = await response.json();
        //console.log(courses);

        return courses;
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
}

export async function fetchCourseById(id : string): Promise<Course> {
    noStore();
    try {
        const response = await fetch(`http://localhost:8080/api/v1/courses/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        const course: Course = await response.json();
        console.log(course);

        return course;
    } catch (error) {
        console.error('Error fetching courses:', error);
        notFound();    
    }
}


export async function fetchPersonById(id : string): Promise<Person> {
    noStore();
    try {
        const response = await fetch(`http://localhost:8080/api/v1/persons/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        const person: Person = await response.json();
        console.log(person);

        return person;
    } catch (error) {
        console.error('Error fetching courses:', error);
        notFound();    
    }
}

export async function fetchPerson(): Promise<Person> {
    noStore();
    try {
        const response = await fetch(`http://localhost:8080/api/v1/persons/PERSON%23a94669c6-33aa-4d38-972f-0f72259c6856`);
        if (!response.ok) {
            throw new Error('Failed to fetch person');
        }
        const person: Person = await response.json();
        console.log(person);

        return person;
    } catch (error) {
        console.error('Error fetching person:', error);
        notFound();    
    }
}




