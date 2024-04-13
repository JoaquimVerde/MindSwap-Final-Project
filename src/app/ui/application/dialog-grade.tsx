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
  open,
  setOpen,
  grade,
  setGrade,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  grade: number;
  setGrade: Dispatch<SetStateAction<number>>;
}) {
  function handleChange(event: { target: { value: any; min: any; max: any } }) {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setGrade(value);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{grade || "Grade"}</Button>
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
              min={0}
              max={20}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
