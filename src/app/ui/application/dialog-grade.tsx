"use client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo({
  grade,
  setGrade,
}: {
  grade: number;
  setGrade: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Grade</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Grade</DialogTitle>
          <DialogDescription>Insert the final grade.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Final Grade
            </Label>
            <Input
              type="number"
              id="grade"
              className="col-span-3"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
