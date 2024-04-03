// using partial reloading here (nav bar wont change when navigating to other pages)

import MyCourses from "./my-courses/page";
import MyAppliedCourses from "./my-courses/my-applied-courses/page";
import MyEnrolledCourses from "./my-courses/my-enrolled-courses/page";
import MyCoursesTeacher from "./my-courses-teacher/page";
import AllCourses from "./all-courses/page";
import Course from "./all-courses/[id]/course/page";
import AllCoursesTeacher from "./all-courses-teacher/page";
import Profile from "./profile/page";

export default async function Dashboard() {
	
	return (
	// Add Tailwind classes	
	<main>
		<h1>Dashboard page here</h1>
		{/* {add Suspense & Skeletons around components} */}
		<div>
			<MyCourses />
		</div>
		<div>
			<MyAppliedCourses />
		</div>
		<div>
			<MyEnrolledCourses />
		</div>
		<div>
			<MyCoursesTeacher />
		</div>
		<div>
			<AllCourses />
		</div>
		<div>
			<Course />
		</div>
		<div>
			<AllCoursesTeacher />
		</div>
		<div>
			<Profile />
		</div>
	</main>
	);
}

