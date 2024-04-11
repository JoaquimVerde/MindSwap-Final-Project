"use client";

import { Calendar } from "@/components/ui/calendar";
import Time from "@/app/ui/dashboard/time";
import InspirationalQuotes from "@/app/ui/dashboard/inspirational-quotes";



export default function Dashboard() {
  return (

    <main>
      <h1>Dashboard</h1>
      <div className="flex flex-row-reverse justify-between mt-10 gap-3">
        <Calendar />
        <div className="card w-118 bg-base-100 shadow-xl">
          <div className="card-body bg-white rounded-2xl text-base">
            <div className="card-actions justify-end"></div>
            <div className="flex justify-center flex-wrap sm:block">
              <InspirationalQuotes />
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body bg-white rounded-2xl text-base">
            <div className="card-actions justify-end"></div>
            <div className="flex justify-center flex-wrap sm:block text-center">
              <h2 className="pb-10 pt-10">Welcome Person</h2>
              <Time />
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}
