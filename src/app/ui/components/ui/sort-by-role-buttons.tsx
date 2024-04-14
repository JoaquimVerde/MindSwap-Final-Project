"use client";

import { fetchRoleByPersonId } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { ApplyCourse, EditCourse, ViewProjects } from "../../courses/buttons";
import { useSession } from "next-auth/react";
import { set } from "date-fns";

const SortByRoleButtons = ({ id }: { id: string }) => {
  const [userRole, setUserRole] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return
    const user: any = session?.user;
    const role = user && user["cognito:groups"] ? user["cognito:groups"][0] : "STUDENT";
    setUserRole(role);
  }, [session, status]);

  return (
    <div>
      {userRole === "TEACHER" && (
        <>
          <Button>
            <ViewProjects id={id} />
          </Button>
          <br />
          <br />
          <Button>
            <EditCourse id={id} />
          </Button>
        </>
      )}
      {userRole === "ADMIN" && (
        <>
          <Button>
            <ViewProjects id={id} />
          </Button>
          <br />
          <br />
          <Button>
            <EditCourse id={id} />
          </Button>
        </>
      )}
      {userRole === "STUDENT" && (
        <>
          <Button>
            <ApplyCourse id={id} />
          </Button>
        </>
      )}
    </div>
  );
};

export default SortByRoleButtons;
