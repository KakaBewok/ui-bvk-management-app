import { GlobalContextProvider } from "@/providers/global-context-provider";
import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { neobrutalism } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function MainLayout() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <GlobalContextProvider>
        <ToastContainer autoClose={2000} />
        <Outlet />
      </GlobalContextProvider>
    </ClerkProvider>
  );
}
