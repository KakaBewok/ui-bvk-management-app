import GuestLayout from "@/layouts/GuestLayout";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <GuestLayout>
      <SignIn path="/sign-in" fallbackRedirectUrl="/dashboard/members" />
    </GuestLayout>
  );
}
