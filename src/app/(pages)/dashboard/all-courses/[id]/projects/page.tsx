import { fetchProjectsByCourseId } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/app/ui/courses/card";
import { Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ChevronsRight, Smile } from "lucide-react";



export default async function ProjectsByCourse({params} : {params: { id: string}}) {
    const id = params.id;
    const projects = await fetchProjectsByCourseId(id);


    if(!projects){
        notFound();
    }
 

    return (
        <div className="mx-2 my-2">
            <div>
                <h1 className='text-2xl mb-4'>All Projects</h1>
            </div>

            <div className="flex flex-wrap">
                {projects?.map((project) => ( 
                    <div key={project.id}> 




                        <div>
                            <Card className={cn("w-[380px] mx-4 my-4")}>
                                <CardHeader>
                                    <CardTitle>{project.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                                        <Scroll />
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                               GitHub URL: {project.gitHubRepo}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Ative: {project.active}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        <GetProjectInfo id= {project.id.replace("#", "%23")}/>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    function GetProjectInfo({id}: {id:string}) {
        return (
            <Link className="flex items-center p-0 pt-0"
                href={`/dashboard/all-courses/${id}/projects/projectInfo`}
            >
                More Info <ChevronsRight className="ml-2 h-4 w-4" />
            </Link>
        );
    }
}