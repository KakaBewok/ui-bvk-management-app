import MainLayout from "@/layouts/MainLayout";
import CreateMemberPage from "@/pages/members/CreateMember";
import MemberDetailsPage from "@/pages/MemberDetails";
import MembersPage from "@/pages/members/Members";
import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/sign-in" replace /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      { path: "/dashboard/members", element: <MembersPage /> },
      { path: "/dashboard/members/:memberId", element: <MemberDetailsPage /> },
      { path: "/dashboard/members/create", element: <CreateMemberPage /> },
    ],
  },
]);

export default router;
