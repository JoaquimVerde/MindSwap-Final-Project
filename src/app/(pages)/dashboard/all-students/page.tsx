'use client';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
  } from "@/components/ui/table";
  import { cn } from "@/lib/utils";
  import { Button } from "@/components/ui/button";
  import Link from "next/link";
  import {getPersonByRole } from "@/app/lib/data";
  import React, { useState, useEffect } from "react";
  import { Person } from "@/app/lib/definitions";
  import { deletePersonById } from "@/app/lib/data";

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
      </div>
    );
  }
  