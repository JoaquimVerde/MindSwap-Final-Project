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
            <div className="mb-10">
            <h2 className= "text-5xl text-white font-bold">
                {project[0]?.name}
            </h2>
            </div>
                <Table className="text-white">
                    <TableCaption className="text-white">List of students who participated in the {project[0]?.name} project</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px] font-bold text-white text-lg">First Name</TableHead>
                                <TableHead className="w-[200px] font-bold text-white text-lg">Last Name</TableHead>
                                <TableHead className="w-[200px] font-bold text-white text-lg">Email</TableHead>
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