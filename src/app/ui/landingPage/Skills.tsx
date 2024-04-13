import Marquee from "react-fast-marquee";
import React from "react";

function Skills() {
  return (
    <div className="bg-black">
    <div id="skills" className=" text-white pb-16">
      <div className="w-full  flex flex-col justify-center items-center text-slate-300 py-16">
        <div className="w-[100%] flex flex-col">
          <div className="flex space-y-2 flex-col text-center mb-14">
            <h2 className="text-4xl font-bold">
              Some skills you can learn...
            </h2>
          </div>
          <Marquee autoFill pauseOnClick>
            <div className="bg-black  shadow-[0_0_10px_blue] m-3 rounded-xl flex  p-2 font-bold text-2xl cursor-podinter text-slate-300">
              NextJS
            </div>

            <div className="bg-black   shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              React
            </div>

            <div className="bg-black   shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Tailwind
            </div>

            <div className="bg-black  shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              CSS
            </div>

            <div className="bg-black  shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              HTML
            </div>
            <div className="bg-black  shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Javascript
            </div>
            <div className="bg-black  shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Typescript
            </div>
            <div className="bg-black  shadow-[0_0_10px_blue] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Node JS
            </div>
          </Marquee>

          <Marquee autoFill pauseOnClick direction="right">
            <div className="bg-black shadow-[0_0_10px_indigo] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Java
            </div>
            <div className="bg-black shadow-[0_0_10px_indigo] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Quarkus
            </div>
            <div className="bg-black shadow-[0_0_10px_indigo] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              AWS
            </div>
            <div className="bg-black shadow-[0_0_10px_indigo] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              SpringBoot
            </div>
            <div className="bg-black shadow-[0_0_10px_indigo] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              Docker
            </div>
            <div className="bg-black shadow-[0_0_10px_indigo] m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              MySQL
            </div>
            <div className="bg-black shadow-[0_0_10px_indigo]  m-3 rounded-xl flex space-x-5 p-2 font-bold text-2xl cursor-pointer text-slate-300">
              DynamoDB
            </div>
          </Marquee>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
