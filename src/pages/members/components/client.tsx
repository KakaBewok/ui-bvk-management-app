import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { Heading } from "@/components/Heading";
// import { useGlobalContext } from "@/hooks/useGlobalContext";
import { Plus } from "lucide-react";
// import { useState } from "react";
// import { toast } from "react-toastify";
import { MemberColumn, columns } from "./columns";
import { useNavigate } from "react-router-dom";

interface MemberClientProps {
  data: MemberColumn[];
}

export const MemberClient: React.FC<MemberClientProps> = ({ data }) => {
  const navigate = useNavigate();
  //   const { loading, setLoading } = useGlobalContext();

  // TODO: Hit api create member by axios
  //   const handleCreatePaymentMethod = () => {
  //     setLoading(true);
  //     router.get(
  //       route("admin.payment_method.create"),
  //       {},
  //       {
  //         onFinish: () => setLoading(false),
  //       }
  //     );
  //   };

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
