import { notFound } from "next/navigation";
import { fetchProjectById } from "@/app/lib/data";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default async function Page({ params }: { params: { id: string }}) {

    const id = params.id;

    const project = await Promise.all([
        (fetchProjectById(id))
    ]);


    if (!project) {
        notFound();
    };


    return (
        <div>
            <h2 className= "text-5xl text-center font-bold">
                {project[0]?.name}
            </h2>
                <Table>
                    <TableCaption>List of students who participated in the {project[0]?.name} project</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">First Name</TableHead>
                                <TableHead>Last Name</TableHead>
                                <TableHead>Email</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {project[0]?.students?.map((student) => ( 
                            <TableRow key={student.id}>
                                 <TableCell className="font-medium">{student.firstName} </TableCell>
                                 <TableCell>{student.lastName}</TableCell>
                                 <TableCell>{student.email}</TableCell>
                            </TableRow> 
                    ))}
                        </TableBody>
                </Table>
    
        </div>
    );
}