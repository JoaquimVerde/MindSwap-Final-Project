//import SearchBar from "@/app/ui/components/ui/search-bar";
import Cards from "@/app/ui/courses/cards";
import { CardsSkeleton, PaginationSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchAllCourses } from "@/app/lib/data";
import Pagination from "@/app/ui/courses/pagination";
import SearchBar from "@/app/ui/components/ui/search-bar";


// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'Courses',
//   };

export default async function AllCourses(
    {
        searchParams,
    }: {
        searchParams?: {
            page?: string;
        };
    }
) {

    const currentPage = Number(searchParams?.page) || 1;
    const totalCourses = await fetchAllCourses();
    const totalPages = Math.ceil(totalCourses/6);


    return (
        <div className="mx-2 my-2">
            <div>
                <h1 className='text-2xl mb-4'>All Courses</h1>
            </div>

            <div className="mt-5 ml-4 w-[500px]">

            <SearchBar placeholder="search by location" currentPage={currentPage} />

            </div>

            <Suspense fallback={<PaginationSkeleton />}>
                <div className="mt-5 ml-4">
                    <Pagination totalPages={totalPages} />
                </div>
            </Suspense>
            
            <Suspense fallback={<CardsSkeleton />}>
                <Cards currentPage={currentPage} />
            </Suspense>
        </div >
    );
}