'use client';
import {Search} from "lucide-react";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useSearchParams, usePathname, useRouter } from "next/navigation";


const SearchBar = () => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const handleSearch = (searchTerm:string) => {
        const params = new URLSearchParams(searchParams);
        if(searchTerm){
            params.set("query", searchTerm)
        }else{
            params.delete("query")
        }
        replace(`${pathName}?${params.toString()}`)
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input className="peer block w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder="search"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e)=>{
                handleSearch(e.target.value);
            }}
            />
            <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
    )
};

export default SearchBar