"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const branchs = [
  {
    value: "main",
    label: "Main",
  },
  {
    value: "master",
    label: "Master",
  },
  {
    value: "development",
    label: "Development",
  },
  {
    value: "user1",
    label: "User 1",
  },
  {
    value: "user2",
    label: "User 2",
  },
];

function Branch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-[1.4rem]"
        >
          {value
            ? branchs.find((branch) => branch.value === value)?.label
            : "Selecione uma branch..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Buscar..."
            className="h-9  text-[1.4rem]"
          />
          <CommandEmpty className="text-[1.4rem]">
            Branch não encontrada.
          </CommandEmpty>
          <CommandGroup>
            {branchs.map((branch) => (
              <CommandItem
                className=" text-[1.4rem]"
                key={branch.value}
                value={branch.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {branch.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === branch.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Branch;
