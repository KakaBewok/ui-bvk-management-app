import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  return (
    <div className="w-screen text-slate-800 bg-gradient-to-tl from-blue-200 via-purple-100 to-green-100 dark:text-slate-300 dark:bg-gradient-to-tl dark:from-slate-700 dark:via-slate-800 dark:to-slate-900">
      {!isLoaded && <Loading />}
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <Header />
          <main>
            <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
