import Image from "next/image";
import Link from "next/link";
import React from "react";

function Courses() {
  return (
    <div id="courses" className="flex items-center justify-center w-screen py-16">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl py-16  ">
        <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
          <Image
            className="rounded-xl group-hover-opacity-85 "
            src="/card1.jpg"
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
              className="p-2 leading-none rounded font-medium mt-3 bg-slate-300 text-xs uppercase hover:scale-105 ease-in duration-300  "
              href="#"
            >
              Click Here
            </Link>
          </div>
        </div>

        <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
          <Image
            className="rounded-xl group-hover-opacity-85 "
            src="/card1.jpg"
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
              className="p-2 leading-none rounded font-medium mt-3 bg-slate-300 text-xs uppercase hover:scale-105 ease-in duration-300"
              href="#"
            >
              Click Here
            </Link>
          </div>
        </div>

        <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
          <Image
            className="rounded-xl group-hover-opacity-85 "
            src="/card1.jpg"
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
              className="p-2 leading-none rounded font-medium mt-3 bg-slate-300 text-xs uppercase hover:scale-105 ease-in duration-300"
              href="#"
            >
              Click Here
            </Link>
          </div>
        </div>

        <div className="flex flex-col bg-black hover:scale-105 ease-in duration-300  h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 m-2">
          <Image
            className="rounded-xl group-hover-opacity-85 "
            src="/card1.jpg"
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
              className="p-2 leading-none rounded font-medium mt-3 bg-slate-300 text-xs uppercase hover:scale-105 ease-in duration-300"
              href="#"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
