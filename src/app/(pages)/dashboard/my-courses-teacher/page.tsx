import { Suspense } from 'react';
// import SearchBar from "@/app/ui/components/ui/search-bar";

export default function MyCoursesTeacher() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <h1>My Courses - Teacher</h1>
                {/* <SearchBar placeholder={""}/> */}
            </div>
        </Suspense>
    );
}
