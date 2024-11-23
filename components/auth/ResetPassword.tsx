"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { useResetPassword } from "@/data/hooks/auth";
import zods from "@/lib/zod";
import { useState } from "react";

const formSchema = z.object({
  newPassword: zods.passwordZod,
});

const ResetPasswordForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const token = useSearchParams().get("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  const { loading, resetPassword } = useResetPassword();

  function onSubmit(values: z.infer<typeof formSchema>) {
    resetPassword({
      variables: { token, ...values },
      onCompleted() {
        setShowSuccessMessage(true);
      },
    });
  }

  if (!token) {
    return (
      <div className="flex items-center flex-col">
        <p className="text-base font-medium my-1 text-center">Буруу холбоос</p>
        <p className="text-sm text-neutral-500">Та имэйл хаяг aa шалгана уу.</p>
      </div>
    );
  }
  return (
    <>
      {showSuccessMessage ? (
        <div className="flex items-center flex-col">
          <p className="text-base font-medium my-1 text-center">
            Таны нууц үг амжилттай шинэчлэгдлээ
          </p>
          <p className="text-sm text-neutral-500">
            Та нэвтэрч ороод үргэлжлүүлнэ үү.
          </p>
        </div>
      ) : (
        <form className="space-y-4 relative" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Шинэ нууц үг
            </label>
            <input
              type="text"
              {...register("newPassword")}
              autoComplete="password"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border  border-grey500 px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Pass"
            />
          </div>

          <button className="w-full col-span-2">
            {loading && "УУЯ"}
            Нууц үг шинэчлэх
          </button>
        </form>
      )}
    </>
  );
};

export default ResetPasswordForm;
