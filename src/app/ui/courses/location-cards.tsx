import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/ui/courses/card";
import { Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GetCourseInfo } from "@/app/ui/courses/buttons";
import { fetchCoursesByLocation } from "@/app/lib/data";
import NotFound from "@/app/(pages)/dashboard/[role]/all-courses/not-found";



export default async function LocationCards(
    {
        placeholder,
        currentPage,
        role
    }: {
        placeholder: string;
        currentPage: number;
        role: string | undefined
    }) {





    const courses = await fetchCoursesByLocation(placeholder, currentPage);


    if (!courses) {
        NotFound();
    };


    return (

        <div>

            <div className="flex flex-wrap">
                {courses?.map((course) => (
                    <div
                        key={course.id}
                    >
                        <Card className={cn("w-[380px] mx-4 my-4")}>
                            <CardHeader>
                                <CardTitle>{course.name}</CardTitle>
                                <CardDescription>{course.program.split("\n")[0]}</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className=" flex items-center space-x-4 rounded-md border p-4">
                                    <Scroll />
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            Price: {course.price} €
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Duration: {course.duration} weeks
                                        </p>

                                    </div>
                                </div>
                                <div>
                                    {course.syllabus.split("\n").map((line, index) => (
                                        <div
                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    Module {index + 1}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {line}
                                                </p>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">
                                    <GetCourseInfo id={course.id.replace("#", "%23")} role={role}/>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}