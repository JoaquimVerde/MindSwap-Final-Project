"use client";
import { deletePersonById, getPersonByRole } from "@/app/lib/data";
import { Person } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { DocumentMinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AllStaff() {
  const [allStaff, setAllStaff] = useState<Person[]>([]);

  useEffect(() => {
    async function fetchStaff() {
      const teachers = await getPersonByRole("TEACHER");
      const admins = await getPersonByRole("ADMIN");
      setAllStaff([...teachers, ...admins]);
    }

    fetchStaff();
  }, []);

  const [personToDelete, setPersonToDelete] = useState<string | null>(null);

  function handleDelete(id: string) {
    setPersonToDelete(id);
    setPersonToDelete(id);
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }
  /* async function handleDelete(id: string) {
      const confirmDelete = window.confirm("Are you sure you want to delete this student?");
      if (confirmDelete) {
        await deletePersonById(id);
        setAllStaff(allStaff.filter(staff => staff.id !== id));
      }
    } */

  return (
    <div className="mx-2 my-2 ">
      <div className="mb-10">
        <h1>All Staff</h1>
      </div>
      <div className="mt-5-w-[800px] flex justify-end space-x-12">
        <Link href="/dashboard/all-staff/add-staff">
          <Button
            className={cn("bg-primary text-white hover:bg-primary/90")}
            onClick={() => {
              console.log("clicked");
            }}
          >
            Add Staff
          </Button>
        </Link>
      </div>
      <Table>
        <TableCaption className="text-white">A list of all staff members.</TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead className="font-bold text-white text-lg">Name</TableHead>
            <TableHead className="font-bold text-white text-lg">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allStaff.map((staff) => (
            <TableRow key={staff.id} className="font-medium">
              <TableCell className="text-white">
                {staff.firstName} {staff.lastName}
              </TableCell>
              <TableCell className="text-white">{staff.role}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDelete(staff.id)}
                  className={cn("bg-primary text-white hover:bg-primary/90")}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this person?
          </h3>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              <button
                className="btn"
                onClick={() => {
                  if (personToDelete) {
                    deletePersonById(personToDelete);
                    setAllStaff(
                      allStaff.filter((person) => person.id !== personToDelete)
                    );
                    const modal = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    if (modal) {
                      modal.close();
                    }
                    setPersonToDelete(null);
                  }
                }}
              >
                Confirm
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
