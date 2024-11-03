import GuestLayout from "@/layouts/GuestLayout";
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <GuestLayout>
      <SignUp path="/sign-up" />
    </GuestLayout>
  );
}
