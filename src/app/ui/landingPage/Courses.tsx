import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";

function Courses() {
  return (
    <>
      <div
        id="courses"
        className=" flex items-center justify-center w-screen py-10"
      >
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl py-16  ">
          <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
            <Image
              className="rounded-xl group-hover-opacity-85 "
              src="/images/card1.jpg"
              width={400}
              height={400}
              alt="/"
            />
            <div className="flex flex-col items-start mt-4">
              <h4 className="text-xl font-semibold">Heading</h4>
              <p className="text-sm text-slate-300">
                Some text about the thing that goes over Link few lines.
              </p>
              <Link
                className="p-3 uppercase hover:scale-105 ease-in duration-300"
                href="#"
              >
                <Button
                  variant="secondary"
                  className="bg-slate-300 text-black  hover:bg-slate-300"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
            <Image
              className="rounded-xl group-hover-opacity-85 "
              src="/images/card1.jpg"
              width={400}
              height={400}
              alt="/"
            />
            <div className="flex flex-col items-start mt-4">
              <h4 className="text-xl font-semibold">Heading</h4>
              <p className="text-sm text-slate-300">
                Some text about the thing that goes over Link few lines.
              </p>
              <Link
                className="p-3 uppercase hover:scale-105 ease-in duration-300"
                href="#"
              >
                <Button
                  variant="secondary"
                  className="bg-slate-300 text-black  hover:bg-slate-300 "
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
            <Image
              className="rounded-xl group-hover-opacity-85 "
              src="/images/card1.jpg"
              width={400}
              height={400}
              alt="/"
            />
            <div className="flex flex-col items-start mt-4">
              <h4 className="text-xl font-semibold">Heading</h4>
              <p className="text-sm text-slate-300">
                Some text about the thing that goes over Link few lines.
              </p>
              <Link
                className="p-3 uppercase hover:scale-105 ease-in duration-300"
                href="#"
              >
                <Button
                  variant="secondary"
                  className="bg-slate-300 text-black  hover:bg-slate-300 "
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
            <Image
              className="rounded-xl group-hover-opacity-85 "
              src="/images/card1.jpg"
              width={400}
              height={400}
              alt="/"
            />
            <div className="flex flex-col items-start mt-4">
              <h4 className="text-xl font-semibold">Heading</h4>
              <p className="text-sm text-slate-300">
                Some text about the thing that goes over Link few lines.
              </p>
              <Link
                className="p-3 uppercase hover:scale-105 ease-in duration-300"
                href="#"
              >
                <Button className="bg-slate-300 text-black text-sm hover:bg-slate-300 ">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="#" className="flex items-center justify-center  ">
        <Button className="bg-black hover:scale-105 ease-in duration-300  h-auto  shadow-xl shadow-gray-600  ">
          <h3 className="flex items-center justify-center text-xl text-slate-300   ">
            See all courses
            <MdOutlineKeyboardDoubleArrowRight className="text-slate-300 mt-1 ml-2" />
          </h3>
        </Button>
      </Link>
    </>
  );
}

export default Courses;
