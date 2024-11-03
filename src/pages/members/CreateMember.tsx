import Member from "@/types/Member";
import { MemberForm } from "./components/member-form";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

const CreatePage = () => {
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
      id: "222c",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222d",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222e",
      name: "Noprizal",
      position: "Fullstack Developer",
      pictureUrl: "kjdhkhkdhfkhf.jpg",
      superior: "111b",
    },
    {
      id: "222f",
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
