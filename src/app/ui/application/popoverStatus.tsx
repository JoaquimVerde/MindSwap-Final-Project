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
import { Status } from "../../lib/definitions";

const statuses: Status[] = [
  {
    value: "applied",
    label: "Applied",
    icon: HelpCircle,
  },
  {
    value: "in review",
    label: "In Review",
    icon: Circle,
  },
  {
    value: "accepted",
    label: "Accepted",
    icon: ArrowUpCircle,
  },
  {
    value: "automatically accepted",
    label: "Automatically Accepted",
    icon: CheckCircle2,
  },
  {
    value: "enrolled",
    label: "Enrolled",
    icon: XCircle,
  },
  {
    value: "dropout",
    label: "Dropout",
    icon: XCircle,
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: XCircle,
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
  selectedStatus: Status | null;
  setSelectedStatus: Dispatch<Status>;
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
                <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
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
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          statuses[0]
                      );
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        status.value === selectedStatus?.value
                          ? "opacity-100"
                          : "opacity-40"
                      )}
                    />
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
