import LocationCards from "@/app/ui/courses/location-cards";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Suspense } from "react";
import { fetchAllCoursesFromLocation } from "@/app/lib/data";
import Pagination from "@/app/ui/courses/pagination";
import { PaginationSkeleton } from "@/app/ui/skeletons";
import SearchBar from "@/app/ui/components/ui/search-bar";


// import { Metadata } from "next";
// import { fetchCoursesByLocation } from "@/app/lib/data";

// export const metadata: Metadata = {
//     title: 'Courses',
// };

export default async function AllCoursesInLocation(
    placeholder: Params,
) {
    const location = (placeholder.params.location);
    const currentPage = Number(placeholder?.searchParams?.page) || 1;
    const totalCoursesNumber = await fetchAllCoursesFromLocation(location);
    const totalPages = Math.ceil(totalCoursesNumber / 6);

    return (
        <div className="mx-2 my-2">
            <div>
                <h1 className='text-2xl mb-4'>All Courses</h1>
            </div>

            <div className="mt-5 ml-4 w-[500px]">
                <SearchBar placeholder="search by location" />
            </div>

            <Suspense fallback={<PaginationSkeleton />}>
                <div className="mt-5 ml-4">
                    <Pagination totalPages={totalPages} />
                </div>
            </Suspense>

            <Suspense fallback={<CardsSkeleton />}>
                <LocationCards placeholder={location} currentPage={currentPage} />
            </Suspense>
        </div >
    )
}