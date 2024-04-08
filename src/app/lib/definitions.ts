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
  edition: string;
  teacher: Teacher;
  syllabus: string;
  program: string;
  schedule: number;
  price: number;
  duration: number;
  location: string;
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
