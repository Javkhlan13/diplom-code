import ForgotForm from "@/components/auth/ForgotForm";
import Link from "next/link";
import { Suspense } from "react";

const Forgot = () => {
  return (
    <>
      <div className="text-lg text-center md:text-2xl font-semibold mx-auto relative md:mt-20">
        Нууц үг сэргээх
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-md">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5 bg-background">
          <Suspense>
            <ForgotForm />
          </Suspense>
        </div>
      </div>
      <div className="mt-8 text-center text-sm relative md:mb-20">
        <button className="text-sm">
          <Link href="/login">Нэвтрэх?</Link>
        </button>
      </div>
    </>
  );
};

export default Forgot;
