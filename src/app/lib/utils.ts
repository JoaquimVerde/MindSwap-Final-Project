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





export const generatePagination = (currentPage: number, totalPages: number) => {
  
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
 
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
 
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

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

export function toPascalCase(str: string): string{
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
