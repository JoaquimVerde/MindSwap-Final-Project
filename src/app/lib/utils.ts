// util methods
// pagination
// date/time formatting
// number formatting

import MyCourses from "../(pages)/dashboard/my-courses/page";
import MyAppliedCourses from "../(pages)/dashboard/my-courses/my-applied-courses/page";
import MyEnrolledCourses from "../(pages)/dashboard/my-courses/my-enrolled-courses/page";
import MyCoursesTeacher from "../(pages)/dashboard/my-courses-teacher/page";
import AllCourses from "../(pages)/dashboard/all-courses/page";
import Course from "../(pages)/dashboard/all-courses/[id]/course/page";
import AllCoursesTeacher from "../(pages)/dashboard/all-courses-teacher/page";
import Profile from "../(pages)/dashboard/profile/page";
import { CustomComponentsArr } from "./types";



export const linksContentPages: CustomComponentsArr = {
    content: [MyCourses, MyAppliedCourses, MyEnrolledCourses, MyCoursesTeacher, AllCourses, Course, AllCoursesTeacher, Profile] as React.FC[],
  }

  
  



  