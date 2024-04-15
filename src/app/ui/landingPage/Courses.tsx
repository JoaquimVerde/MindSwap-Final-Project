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
    fetch(`${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/courses`)
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
      <div className="bg-black pb-10">
        <div
          id="courses"
          className=" flex flex-col items-center justify-center w-screen"
        >
          <div className="pb-4">
            <h2 className="text-4xl font-bold text-slate-300 pt-12 pb-6">Check our courses</h2>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl  ">
            {courses.length &&
              courses?.slice(0, 4).map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-green-900 rounded-xl p-4 m-2"
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
                      className="p-3 uppercase hover:scale-105 ease-in duration-300 tx-secondary"
                      onClick={(event) => {
                        event.preventDefault();
                        signIn("cognito", {
                          callbackUrl:
                            `${process.env.NEXT_PUBLIC_URL}/api/auth/redirect`,
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
      </div>
    </>
  );
}

export default Courses;
