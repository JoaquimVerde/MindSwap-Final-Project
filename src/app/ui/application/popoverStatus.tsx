"use client";
import { Dispatch, SetStateAction } from "react";
import * as React from "react";
import {
  ArrowUpCircle,
  Check,
  CheckCircle2,
  Circle,
  HelpCircle,
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
    value: "APPLIED",
    label: "Applied",
    icon: HelpCircle,
  },
  {
    value: "IN_REVIEW",
    label: "In Review",
    icon: Circle,
  },
  {
    value: "ACCEPTED",
    label: "Accepted",
    icon: ArrowUpCircle,
  },
  {
    value: "AUTOMATICALLY_ACCEPTED",
    label: "Automatically Accepted",
    icon: CheckCircle2,
  },
  {
    value: "ENROLLED",
    label: "Enrolled",
    icon: XCircle,
  },
  {
    value: "DROPOUT",
    label: "Dropout",
    icon: XCircle,
  },
  {
    value: "REJECTED",
    label: "Rejected",
    icon: XCircle,
  },
];

function getStatus(statusName: string | undefined | null): Status {
  return statuses.find((status) => status.value === statusName) || statuses[0];
}

function getStatusElement(statusName: string | undefined | null) {
  const element = getStatus(statusName);
  return element ? (
    <>
      <element.icon className="mr-2 h-4 w-4 shrink-0" />
      {element.label}
    </>
  ) : (
    <></>
  );
}

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
            {getStatusElement(selectedStatus)}
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
                    style={{ pointerEvents: "auto" }}
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      console.log(value);
                      const selected = statuses.find(
                        (item) => item.value === value
                      );
                      setSelectedStatus(selected?.value || statuses[0].value);
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        status.value === getStatus(selectedStatus).value
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
