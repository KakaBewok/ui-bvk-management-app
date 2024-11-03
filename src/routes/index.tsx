import DashboardLayout from "@/layouts/dashboard-layout";
import RootLayout from "@/layouts/root-layout";
import MembersPage from "@/pages/Members";
import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navigate to="/sign-in" replace /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "members", element: <MembersPage /> },
          { path: "members/:memberId", element: <MembersPage /> },
          { path: "members", element: <MembersPage /> },
        ],
      },
    ],
  },
]);

export default router;
