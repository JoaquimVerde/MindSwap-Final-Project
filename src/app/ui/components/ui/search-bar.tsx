'use client';
import { fetchCoursesByLocation } from "@/app/lib/data";
import {Search} from "lucide-react";
import { useSearchParams, usePathname, useRouter, redirect } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';


const SearchBar = ({ placeholder }: { placeholder: string }) => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((searchTerm : string) => {

        const params = new URLSearchParams(searchParams);
        if(searchTerm){
            params.set("query", searchTerm)
        }else{
            params.delete("query")
        }
        replace(`${pathName}?${params.toString()}`);
    }, 300);


    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input className="peer block w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e)=>{
                handleSearch(e.target.value);
                redirect("/dashboard/all-courses/location");

            }}
            />
            <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
    )
};

export default SearchBar