"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { Heading } from "@/components/Heading";
import { Plus } from "lucide-react";
import { MemberColumn, columns } from "./columns";
import { useNavigate } from "react-router-dom";

interface MemberClientProps {
  data: MemberColumn[];
}

export const MemberClient: React.FC<MemberClientProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Member (${data.length})`}
          description="Manage member for your company"
        />
        <Button
          onClick={() => navigate("/dashboard/members/create")}
          variant="outline"
          className="dark:bg-slate-200"
        >
          <Plus className="w-4 h-4 dark:text-slate-900" />
        </Button>
      </div>
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
