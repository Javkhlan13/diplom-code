"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSendEmail } from "@/data/hooks/auth";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
});

const ForgotForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const { sendEmail, loading } = useSendEmail();

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail({
      variables: { ...values },
      onCompleted() {
        setShowSuccessMessage(true);
      },
    });
  }

  return (
    <>
      {showSuccessMessage ? (
        <>
          <p className="text-base font-medium my-1 text-center">
            Танд нууц үг солих холбоос бүхий имэйл илгээлээ.
          </p>
          <p className="text-sm text-neutral-500">Та имэйл хаяг шалгана уу.</p>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Майл хаяг
            </label>
            <input
              id="email-address"
              type="email"
              {...register("email")}
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border  border-grey500 px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Майл хаяг"
            />
          </div>

          <button className="w-full col-span-2" disabled={loading}>
            {loading && "номио л хөөрхөн"}
            Нууц үг сэргээх
          </button>
        </form>
      )}
    </>
  );
};

export default ForgotForm;
