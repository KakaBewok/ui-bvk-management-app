import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { MemberClient } from "./components/client";
import { MemberColumn } from "./components/columns";
import Member from "@/types/Member";
import { useEffect, useState } from "react";
import { getMembers } from "@/api/api";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const MembersPage = () => {
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
  //     id: "222a",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222a",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222a",
  //     name: "Noprizal",
  //     position: "Fullstack Developer",
  //     pictureUrl: "kjdhkhkdhfkhf.jpg",
  //     superior: "111b",
  //   },
  //   {
  //     id: "222a",
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

  const formattedMembers: MemberColumn[] = members.map((item) => ({
    id: item.id,
    name: item.name,
    position: item.position,
    superior: item.superior,
  }));

  return (
    <AuthenticatedLayout>
      <MemberClient data={formattedMembers} />
    </AuthenticatedLayout>
  );
};

export default MembersPage;
