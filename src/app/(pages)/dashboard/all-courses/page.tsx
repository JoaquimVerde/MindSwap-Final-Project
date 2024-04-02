
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GetCourseInfo } from "@/app/ui/courses/buttons";





export default async function Page() {

    // fazer fetchCourses(data.ts)

    //const courses = await fetchCourses(query, currentPage);

   

    return (
        <div className="mx-2 my-2">

            <div>
                <h1 className='text-2xl'>All Courses</h1>
            </div>

            {/*<div>
                {courses?.map((course) => (
                    <div key={course.id}>           */}  

            

            <Card className={cn("w-[380px] mx-2 my-2")}>
                <CardHeader>
                    <CardTitle>(Name)</CardTitle>
                    <CardDescription>(SmallDescription)</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <Scroll />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Price: (price)
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Duration: (duration)
                            </p>

                        </div>
                    </div>
                    <div>
                        <div
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    I Module Title:
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    (Module description)
                                </p>
                            </div>
                        </div>
                        <div
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    II Module Title:
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    (Module description)
                                </p>
                            </div>
                        </div>
                        <div
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    III Module Title:
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    (Module description)
                                </p>
                            </div>
                        </div>

                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <GetCourseInfo /> {/*id={course.id} */}
                    </Button>
                </CardFooter>
            </Card>
            {/* </div>

            ))}</div>*/}
            
        </div >
    );
}