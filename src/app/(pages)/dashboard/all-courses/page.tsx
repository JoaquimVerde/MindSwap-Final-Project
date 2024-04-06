import Cards from "@/app/ui/courses/cards";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";


// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'Courses',
//   };

export default function AllCourses({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}
) {

    


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