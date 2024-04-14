import { LucideIcon } from "lucide-react";
export type Course = {
  id: string;
  name: string;
  edition: number;
  syllabus: string;
  program: string;
  schedule: string;
  price: number;
  duration: number;
  location: string;
  teacher: Teacher;
  enrolledStudents: number;
  maxStudents: number;
};

export type Teacher = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Person = {
  username: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  address: string;
  password: string;
  dateOfBirth: string;
  cv: string;
};

export type Application = {
  id: string;
  student: Person;
  course: Course;
  status: string;
  finalGrade: string;
  aboutYou: string;
  prevKnowledge: boolean;
  prevExperience: boolean;
};

export type Student = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Project = {
  id: string;
  courseId: string;
  students: Student[];
  name: string;
  gitHubRepo: string;
  syllabus: string;
  grade: number;
};

export type CourseForm = {
  id: string;
  name: string;
  edition: number;
  syllabus: string;
  program: string;
  schedule: string;
  price: number;
  duration: number;
  location: string;
  teacher: string;
};


