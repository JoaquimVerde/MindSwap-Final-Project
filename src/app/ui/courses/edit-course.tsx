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
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Course, CourseForm } from "@/app/lib/definitions";
import Link from "next/link";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { updateCourse } from "@/app/lib/action";



const url = ""; // TODO add url to env.ts

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Firstname must be at least 2 characters." }),
    edition: z.number(),
    syllabus: z.string(),
    program: z.string(),
    schedule: z.string(),
    price: z.number(),
    duration: z.number(),
    location: z.string(),
    teacherId: z.string(),
});



export function EditCourseForm({
    course,
}: {
    course: Course;
}) {



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: course?.name,
            edition: course?.edition,
            syllabus: course?.syllabus,
            program: course?.program,
            schedule: course?.schedule,
            price: course?.price,
            duration: course?.duration,
            location: course?.location,
            teacherId: course?.teacher?.id,

        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("submited", values);
        updateCourse(values, course?.id.replace("#", "%23"));

    }


    return (
        <main>
            <div className="w-[400px] mt-3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder={course?.name} {...field}
                                        />
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
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Edition</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={"" + course?.edition} {...field}
                                            onChange={(e) => {
                                                const parsedValue = parseInt(e.target.value);
                                                if (!isNaN(parsedValue)) {
                                                    // If the parsed value is not NaN, update the field value
                                                    field.onChange(parsedValue);
                                                } else {
                                                    // If the parsed value is NaN, update the field value to an empty string or handle it accordingly
                                                    field.onChange('');
                                                }
                                            }}

                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="syllabus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Syllabus</FormLabel>
                                    <FormControl>
                                        <textarea
                                            className="textarea w-full rows-20 h-[150px]"
                                            placeholder={course?.syllabus} {...field}
                                        />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="program"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Program</FormLabel>
                                    <FormControl>
                                        <textarea
                                            className="textarea w-full rows-20 h-[400px]"
                                            placeholder={course?.program} {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="schedule"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Schedule
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={course?.schedule} {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Price (€)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={"" + course.price} {...field}
                                            onChange={(e) => {
                                                const parsedValue = parseInt(e.target.value);
                                                if (!isNaN(parsedValue)) {
                                                    // If the parsed value is not NaN, update the field value
                                                    field.onChange(parsedValue);
                                                } else {
                                                    // If the parsed value is NaN, update the field value to an empty string or handle it accordingly
                                                    field.onChange('');
                                                }
                                            }}

                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Duration (weeks)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={"" + course.duration} {...field}
                                            onChange={(e) => {
                                                const parsedValue = parseInt(e.target.value);
                                                if (!isNaN(parsedValue)) {
                                                    // If the parsed value is not NaN, update the field value
                                                    field.onChange(parsedValue);
                                                } else {
                                                    // If the parsed value is NaN, update the field value to an empty string or handle it accordingly
                                                    field.onChange('');
                                                }
                                            }}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Location
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={course.location} {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="teacherId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teacher ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={course?.teacher?.firstName + " " + course?.teacher?.lastName} {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Insert teacher ID.
                                    </FormDescription>
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
