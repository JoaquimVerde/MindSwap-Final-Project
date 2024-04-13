"use client";

import { fetchAllApplicationsById } from "@/app/lib/data";
import { Application } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import { toPascalCase } from "@/app/lib/utils";
import { useSession } from "next-auth/react";

export default function MyAppliedCourses() {
  const [applications, setApplications] = useState<Application[]>([]);
  const { data: session, status } = useSession();
  const user: any = session?.user;

  useEffect(() => {
    const fetchData = async () => {
      if (status === "loading") return;
      try {
        const applicationData = await fetchAllApplicationsById([
          "APPLIED",
          "IN_REVIEW",
          "ACCEPTED",
          "AUTOMATICALLY_ACCEPTED",
        ], user.id);
        setApplications(applicationData);
        console.log(applicationData);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchData();
  }, [session, status]);

  return (
    <div>
      {applications.map((application) => (
        <div
          key={application.id}
          className="my-4 p-4 border border-gray-200 rounded text-gray-200"
        >
          <h2 className="underline py-4">Application Details</h2>
          <p>
            Name: {application.student.firstName} {application.student.lastName}
          </p>
          <p>Course: {application.course.name}</p>
          <p>Edition: {application.course.edition}</p>
          <p>Status: {toPascalCase(application.status).replace("_", " ")}</p>
          <p>About Student: {application.aboutYou}</p>
        </div>
      ))}
    </div>
  );
}
