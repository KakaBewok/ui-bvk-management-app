import { Button } from "@/components/ui/button";
// import { useGlobalContext } from "@/hooks/useGlobalContext";
// import { useState } from "react";
// import { toast } from "react-toastify";
import { MemberColumn } from "./columns";

export const CellAction = ({ data }: { data: MemberColumn }) => {
  console.log(data);
  //   const { loading, setLoading } = useGlobalContext();

  //TODO: Hit details member
  // const handleShowDetailsPaymentMethod = (
  //     e: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //     e.stopPropagation();

  //     setLoading(true);
  //     router.get(
  //         route("admin.payment_method.show", data.id),
  //         {},
  //         {
  //             onFinish: () => setLoading(false),
  //         }
  //     );
  // };

  return (
    <div>
      <div className="flex items-center">
        <Button
          //   disabled={loading}
          variant="ghost"
          className="h-8 p-0 w-9 bg-sky-500 hover:bg-sky-600"
          //   onClick={(e) => handleShowDetailsPaymentMethod(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="eye"
            className="fill-current"
            width="21"
            height="21"
            fill="none"
          >
            <path
              fill="#F9F9FC"
              d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
