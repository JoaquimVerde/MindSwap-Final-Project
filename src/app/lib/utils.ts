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


export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
}