import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { MemberClient } from "./components/client";
import { MemberColumn } from "./components/columns";
import Member from "@/types/Member";

const MembersPage = () => {
  //TODO: Hit all member by axious

  //dummy data:
  const members: Member[] = [
    {
      id: "222a",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222a",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222a",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222a",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222a",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "111b",
      name: "Muhammad Malik",
      position: "Lead Programmer",
      pictureUrl: "kjdhkhkdhfdddf.jpg",
      superior: "",
    },
  ];

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
