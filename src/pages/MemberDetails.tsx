import { useParams } from "react-router-dom";

const MemberDetailsPage = () => {
  const { memberId } = useParams();
  console.log(memberId);
  return (
    <div>
      <h1>Member details page</h1>
    </div>
  );
};

export default MemberDetailsPage;
