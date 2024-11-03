import Member from "@/types/Member";
import { MemberForm } from "./components/member-form";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import { getMembers } from "@/api/api";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const CreatePage = () => {
  const { setLoading } = useGlobalContext();
  const [members, setMembers] = useState<Member[]>([]);

  //dummy data:
  // const members: Member[] = [
  //   {
  //     id: "222a",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222c",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222d",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222e",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222f",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "111b",
  //     name: "Muhammad Malik",
  //     position: "Lead Programmer",
  //     pictureUrl: "kjdhkhkdhfdddf.jpg",
  //     superior: "",
  //   },
  // ];

  useEffect(() => {
    setLoading(true);
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="flex-col">
        <div className="flex-1 p-4 pt-5 space-y-4 md:p-8">
          <MemberForm members={members} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CreatePage;
