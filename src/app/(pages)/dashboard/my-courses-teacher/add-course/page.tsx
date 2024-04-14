"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";

export default function AddCourse() {
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const user: any = session?.user;
  
  const formSchema = z.object({
    name: z.string(),
    teacherId: z.string(),
    edition: z.string(),
    syllabus: z.string(),
    program: z.string(),
    schedule: z.string(),
    price: z.string(),
    duration: z.string(),
    location: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      teacherId: user ? user.id : "",
      edition: "",
      syllabus: "",
      program: "",
      schedule: "",
      price: "",
      duration: "",
      location: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Validate the form values
      const validatedValues = formSchema.parse(values);
      const url = "http://localhost:3000/proxy/api/v1/courses";

      // Add additional fields

      const api_req_SelectItems = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedValues),
      };

      const response = await fetch(url, api_req_SelectItems);

      if (response.ok) {
        toast({
          title: "Course was created successfully",
        });
      } else {
        const json = await response.json();
        toast({
          variant: "destructive",
          title: json.message,
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "There was an error creating this course",
      });
    }
  }

  return (
    <div>
      <h1>Create new course</h1>
      <main>
        <div className="flex flex-col items-center justify-center p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-20 p-20 pt-0"
            >
              <div className="grid w-full max-w-sm items-center gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Course name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="edition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Edition</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Edition #"
                          {...field}
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
                      <FormLabel className="text-gray-400">Syllabus</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Syllabus"
                          {...field}
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
                      <FormLabel className="text-gray-400">Program</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Program"
                          {...field}
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
                      <FormLabel className="text-gray-400">Schedule</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Schedule"
                          {...field}
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
                      <FormLabel className="text-gray-400">Price</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Price"
                          {...field}
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
                      <FormLabel className="text-gray-400">Duration</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Duration"
                          {...field}
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
                      <FormLabel className="text-gray-400">Location</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Location"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full my">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
