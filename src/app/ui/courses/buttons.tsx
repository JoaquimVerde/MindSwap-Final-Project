import Link from 'next/link';
import { ChevronsRight, Smile, Edit, CircuitBoard } from "lucide-react";


export function GetCourseInfo({ id }: { id: string }) {
    return (
        <Link className="flex items-center p-0 pt-0"
            href={`/dashboard/all-courses/${id}/course`}
        > More Info <ChevronsRight className="ml-2 h-4 w-4" />
        </Link>
    );
}

export function ApplyCourse({ id }: { id: string }) {
    return (
        <Link className="flex items-center p-0 pt-0"
            href={`/dashboard/all-courses/${id}/application`}
        > Apply Now <Smile className="ml-3" /> 
        </Link>
    );
}

export function EditCourse({ id }: { id: string }) {
    return (
        <Link className="flex items-center p-0 pt-0"
            href={`/dashboard/all-courses/${id}/edit`}
        > Edit Course <Edit className="ml-3" /> 
        </Link>
    );
}

export function ViewProjects({ id }: { id: string }) {
    return (
        <Link className="flex items-center p-0 pt-0"
            href={`/dashboard/all-courses/${id}/projects`}
        > View Projects <CircuitBoard className="ml-3" />
        </Link>
    );
}
