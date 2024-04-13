"use client";
import { Dispatch, SetStateAction } from "react";
import * as React from "react";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: "applied",
    label: "Applied",
  },
  {
    value: "in review",
    label: "In Review",
  },
  {
    value: "accepted",
    label: "Accepted",
  },
  {
    value: "automatically accepted",
    label: "Automatically Accepted",
  },
  {
    value: "enrolled",
    label: "Enrolled",
  },
  {
    value: "dropout",
    label: "Dropout",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];

export function ComboboxPopover({
  open,
  setOpen,
  selectedStatus,
  setSelectedStatus,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedStatus: string | null;
  setSelectedStatus: Dispatch<string>;
}) {
  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] justify-start"
          >
            {selectedStatus ? (
              <>
                
                {selectedStatus.label}
              </>
            ) : (
              <>+ Set status</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value.toString()}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((s) => s.value === value)?.value ?? ""
                      );
                      setOpen(false);
                    }}
                  >
                   
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
