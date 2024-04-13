"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Course } from "@/app/lib/definitions";
import { signIn } from "next-auth/react";

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/proxy/api/v1/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <>
      <div
        id="courses"
        className=" flex items-center justify-center w-screen py-10"
      >
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl py-16  ">
          {courses.length &&
            courses?.slice(0, 4).map((course) => (
              <div
                key={course.id}
                className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2"
              >
                <Image
                  className="rounded-xl group-hover-opacity-85 "
                  src="/images/card1.jpg" // replace with the actual image URL if available
                  width={400}
                  height={400}
                  alt={course.name}
                />
                <div className="flex flex-col items-start mt-4">
                  <h4 className="text-xl font-semibold">{course.name}</h4>
                  <p className="text-sm text-slate-300">
                    Edition: {course.edition}
                  </p>
                  <p className="text-sm text-slate-300">
                    Syllabus: {course.syllabus}
                  </p>
                  <Link
                    className="p-3 uppercase hover:scale-105 ease-in duration-300"
                    onClick={(event) => {
                      event.preventDefault();
                      signIn("cognito", {
                        callbackUrl: "http://localhost:3000/api/auth/redirect",
                      });
                    }}
                    href="" // replace with the actual link if available
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
