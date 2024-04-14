"use client";

import { fetchRoleByPersonId } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { ApplyCourse, EditCourse, ViewProjects } from "../../courses/buttons";

const SortByRoleButtons = ({ id }: { id: string }) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const role = await fetchRoleByPersonId();
        setUserRole(role);
      } catch (error) {
        console.error("Failed to fetch role:", error);
      }
    };

    fetchRole();
  }, []);

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
