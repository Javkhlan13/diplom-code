import ResetPasswordForm from "@/components/auth/ResetPassword";
import { Metadata } from "next/types";
import Link from "next/link";
import { Suspense } from "react";

const ResetPassword = () => {
  return (
    <>
      <div className="text-lg text-center md:text-2xl font-semibold mx-auto relative md:mt-20">
        Нууц үг шинэчлэх
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-md">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5 bg-background">
          <Suspense>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
