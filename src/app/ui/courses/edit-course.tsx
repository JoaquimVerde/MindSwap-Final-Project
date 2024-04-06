'use client'

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


const url = ""; // TODO add url to env.ts

const formSchema = z.object({
    coursename: z
        .string()
        .min(2, { message: "Firstname must be at least 2 characters." }),
    lastname: z
        .string()
        .min(2, { message: "Lastname must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNumber: z.string(),
    uploadResume: z.string().optional(),
    aboutyou: z.string(),
});

export function EditCourseForm({
    course
  }: {
    course: Course[];
  }) {

    

    console.log(course)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            coursename: course[0].name,
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("submited", values);
        // TODO add api POSt
    }


    return (
        <main>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="coursename"
                            defaultValue={course[0]?.name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder={course[0]?.name} {...field}/>
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
                            name="lastname"
                            defaultValue={course[0]?.edition}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last name</FormLabel>
                                    <FormControl>
                                        <Input placeholder={course[0]?.edition} {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="aboutyou"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Something about you</FormLabel>
                                    <FormControl>
                                        <textarea
                                            className="textarea w-full rows-20"
                                            placeholder="... what's your interest, what do you like to do, ..."
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                       
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@email.com" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        
                                    </FormLabel>
                                    <FormControl>
                                        
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="uploadResume"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>

                                    </FormLabel>
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Input id="resume" type="file" className=""></Input>
                                        </div>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
