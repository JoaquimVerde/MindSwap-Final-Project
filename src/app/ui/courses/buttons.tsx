import Link from 'next/link';
import { ChevronsRight } from "lucide-react";


export function GetCourseInfo({ id }: { id: string }) {
    return (
        <Link className="flex items-center p-0 pt-0"
            href={`/dashboard/all-courses/${id}/course`}
        > More Info <ChevronsRight className="ml-2 h-4 w-4" />
        </Link>
    );
}
