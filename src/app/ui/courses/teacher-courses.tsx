"use client";

import { fetchCoursesByTeacherId } from "@/app/lib/data";
import { Course } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import cn from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetCourseInfo } from "./buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { useSession } from "next-auth/react";

const TeacherCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    const user: any = session?.user;
    const id = user ? user.id : "";
    const fetchTeacherCourses = async () => {
      try {
        const courses = await fetchCoursesByTeacherId(id);
        setCourses(courses);
      } catch (error) {
        console.error("Failed to fetch teacher's courses:", error);
      }
    };

    fetchTeacherCourses();
  }, [session, status]);

  return (
    <div>
      <Link href="/dashboard/my-courses-teacher/add-course">
        <Button
          className={cn("bg-primary text-white ml-4")}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Create Course
        </Button>
      </Link>

      <div className="flex flex-wrap">
        <br />
        {courses?.map((course) => (
          <div key={course.id} className="w-[380px] mx-4 my-4">
            <Card>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>
                  {course.program.split("\n")[0]}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
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
                  {course?.syllabus.split("\n").map((line, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Module {index + 1}
                        </p>
                        <p className="text-sm text-muted-foreground">{line}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <GetCourseInfo id={course.id.replace("#", "%23")} />
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCourses;
