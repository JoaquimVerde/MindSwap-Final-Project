import Cards from "@/app/ui/courses/cards";
import { CardSkeleton, CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";



export default function AllCourses() {


    return (
        <div className="mx-2 my-2">
            <div>
                <h1 className='text-2xl mb-4'>All Courses</h1>
            </div>
            <Suspense fallback={<CardsSkeleton />}>
                <Cards />
            </Suspense>
        </div >
    );
}