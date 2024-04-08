'use client';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Course } from "@/app/lib/definitions";
import { updateCourse } from "@/app/lib/action";
import Link from "next/link";



const url = ""; // TODO add url to env.ts

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Firstname must be at least 2 characters." }),
    edition: z
        .number(),
    syllabus: z.string(),
    program: z.string(),
    schedule: z.string().optional(),
    price: z.number(),
    duration: z.number(),
    location: z.string(),
    teacherId: z.string(),
});



export function EditCourseForm({
    course,
}: {
    course: Course[];
}) {


    console.log(course)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: course[0]?.name,
            edition: course[0]?.edition,
            syllabus: course[0]?.syllabus,
            program: course[0]?.program,
            schedule: course[0]?.schedule,
            price: course[0]?.price,
            duration: course[0]?.duration,
            location: course[0]?.location,
            teacherId: course[0]?.teacher.id,

        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("submited", values);
        updateCourse(course);
    }


    return (
        <main>
            <div className="w-[400px] mt-3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            defaultValue={course[0]?.name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder={course[0]?.name} {...field} />
                                    </FormControl>

                                    <FormDescription>
                                        This is the title of the Course.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="edition"
                            defaultValue={course[0]?.edition}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Edition</FormLabel>
                                    <FormControl>
                                        <Input placeholder={""+course[0]?.edition} {...field}/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="teacherId"
                            defaultValue={course[0]?.teacher.id}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teacher ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder={course[0]?.teacher?.firstName + " " + course[0]?.teacher?.lastName}/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="syllabus"
                            defaultValue={course[0]?.syllabus}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Syllabus</FormLabel>
                                    <FormControl>
                                        <textarea
                                            className="textarea w-full rows-20 h-[100px]"
                                            placeholder={course[0]?.syllabus}/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="program"
                            defaultValue={course[0]?.program}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Program</FormLabel>
                                    <FormControl>
                                        <textarea
                                            className="textarea w-full rows-20 h-[400px]"
                                            placeholder={course[0]?.program} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="schedule"
                            defaultValue={course[0]?.schedule}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Schedule
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={course[0].schedule} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            defaultValue={course[0]?.price}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Price (€)
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={""+course[0].price} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="duration"
                            defaultValue={course[0]?.duration}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Duration (weeks)
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={""+course[0].duration} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            defaultValue={course[0]?.location}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Location
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={course[0].location} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                            <Button>
                                <Link
                                    href="/dashboard/all-courses">
                                    Cancel
                                </Link>
                            </Button>

                            <Button type="submit" className="ml-[230px]" >
                                Submit
                            </Button>                      
                    </form>
                </Form>
            </div>
        </main>
    );
}
