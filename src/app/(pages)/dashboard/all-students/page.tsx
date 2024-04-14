'use client';
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
import Link from "next/link";
import React, { useEffect, useState } from "react";

  export default function AllStudents() {
    const [allStudents, setAllStudents] = useState<Person[]>([]);
  
    useEffect(() => {
      async function fetchStudents() {
        const students = await getPersonByRole("STUDENT");
        console.log(students);
        setAllStudents(students);
      }
  
      fetchStudents();
    }, []);

    const [personToDelete, setPersonToDelete] = useState<string | null>(null);
    /* function handleDelete(id: string) {
      setPersonToDelete(id);
      setPersonToDelete(id);
      const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
      if (modal) {
      modal.showModal();
    }
    } */
    async function handleDelete(id: string) { 
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
          await deletePersonById(id);
          setAllStudents(allStudents.filter(student => student.id !== id));
        }
      }
  
    return (
      <div className="mx-2 my-2">
        <div>
          <h1 className="text-2xl mb-4">All Students</h1>
        </div>
        <div className="mt-5 ml-4 w-[800px] flex space-x-12">
</div>
        <Table>
          <TableCaption>A list of all students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                  {student.firstName} {student.lastName}
                </TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
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
          <h3 className="font-bold text-lg">Are you sure you want to delete this person?</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => {
                if (personToDelete) {
                  deletePersonById(personToDelete);
                  setAllStudents(allStudents.filter(person => person.id !== personToDelete));
                  const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
                  if (modal) {
                  modal.close();
    }
                  setPersonToDelete(null);
                }
              }}>Confirm</button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      </div>
    );
  }
  