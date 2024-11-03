import { Button } from "@/components/ui/button";
import { Heading } from "@/components/Heading";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import ImageNotFound from "./../../assets/images/image-not-found.jpg";
import Member from "@/types/Member";
import { getMemberDetails } from "@/api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// export default interface Member {
//   id: string;
//   name: string;
//   position: string;
//   pictureUrl: string;
//   superior?: Member;
// }

const MemberDetailsPage = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const { setLoading } = useGlobalContext();
  const [member, setMembers] = useState<Member | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchMemberDetail = async () => {
      try {
        const data = await getMemberDetails(memberId ?? "");
        setMembers(data);
      } catch (error) {
        console.error("Error fetching member details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberDetail();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between pt-6 pb-10">
        <Heading title="Details member" description="All about your member" />
        <div className="flex items-center">
          <Button
            // disabled={loading}
            variant="outline"
            onClick={() => window.history.back()}
            className="dark:bg-slate-200 dark:text-slate-900"
          >
            Back
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg md:flex-row bg-slate-50 dark:bg-slate-600">
        <div className="flex-1 p-6 space-y-6 md:p-7">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50">
            {member?.name}
          </h1>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-50">
              Position:{" "}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {member?.position}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-50">
              Superior:{" "}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {member?.superior ? member.superior : "-"}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 w-full gap-5 p-5 md:flex-row">
          <div className="w-full h-full overflow-hidden border border-gray-200 rounded-sm shadow-sm dark:border-gray-400">
            {member?.pictureUrl ? (
              <img
                src={`${import.meta.env.VITE_APP_URL}/storage/${
                  member.pictureUrl
                }`}
                alt="Profile picture"
                className="object-cover w-full h-full transition-transform duration-200 transform hover:scale-105"
              />
            ) : (
              <img
                src={ImageNotFound}
                alt="No image uploaded"
                className="object-cover w-full h-full transition-transform duration-200 transform hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetailsPage;
