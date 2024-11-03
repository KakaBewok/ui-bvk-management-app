"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { CellAction } from "./cell-action";

export type MemberColumn = {
  id: string;
  name: string;
  position: string;
  superior?: string;
};

export const columns: ColumnDef<MemberColumn>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold bg-transparent text-slate-800 dark:text-slate-50 hover:border-transparent "
        >
          Num.
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold bg-transparent text-slate-800 dark:text-slate-50 hover:border-transparent"
        >
          Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold bg-transparent text-slate-800 dark:text-slate-50 hover:border-transparent "
        >
          Position
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "superior",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold bg-transparent text-slate-800 dark:text-slate-50 hover:border-transparent "
        >
          Superior
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: () => {
      return (
        <span className="font-bold text-slate-800 dark:text-slate-50">
          Actions
        </span>
      );
    },
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
