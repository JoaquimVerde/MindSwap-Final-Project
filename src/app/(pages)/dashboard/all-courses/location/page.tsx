import Cards from "@/app/ui/courses/cards";
import LocationCards from "@/app/ui/courses/location-cards";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";



// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'Courses',
//   };

// export default function AllCoursesInLocation(
    
//     {
//         searchParams,
//         placeholder,
//     }: {
//         searchParams?: {
//             page?: string;
//             placeholder: string;
//         };
//     }
// ) {

//     const currentPage = Number(searchParams?.page) || 1;


//     return (
//         <div className="mx-2 my-2">
//             <div>
//                 <h1 className='text-2xl mb-4'>All Courses</h1>
//             </div>
//             <Suspense fallback={<CardsSkeleton />}>
//                 <LocationCards currentPage={currentPage} placeholder={placeholder}/>
//             </Suspense>
//         </div >
//     );
// }