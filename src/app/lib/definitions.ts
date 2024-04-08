// // data model definitions

// export type User = {
//      id: string;
//      name: string;
//      email: string;
//      password: string;
//    };

// 1,000,000

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
};

export type Teacher = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Person = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
};

export type Application = {
  personId: string;
  courseId: string;
  status: string;
  finalGrade: string;
  aboutYou: string;
  prevKnowledge: boolean;
  prevExperience: boolean;
};

export type Project = {
  id: string;
  courseId: string;
  studentId: string[];
  name: string;
  gitHubRepo: string;
  syllabus: string;
  grade: number;
};
