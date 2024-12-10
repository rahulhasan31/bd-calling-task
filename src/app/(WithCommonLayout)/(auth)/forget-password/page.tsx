"use client";

import FXInput from "@/components/forms/FXInput";
import CommonAuthImage from "@/components/Ui/CommonAuthImage";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function ForgetPassword() {
  const router = useRouter();

  // This function handles form submission
  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/set-new-password");
  };

  return (
    <>
      <CommonAuthImage />

      <div className="flex w-full h-screen mx-auto flex-col items-center lg:flex-row">
        <div className="lg:w-[50%] bg-gradient-to-bl from-default-100 max-sm:mx-auto p-5 shadow-lg rounded-lg mt-4 max-md:w-[80%]">
          <div className="text-center text-3xl font-bold mb-4">
            Forgot Password
          </div>

          <form onSubmit={onSubmitHandle} className="w-full">
            <FXInput className="w-full mb-5" name="email" label="Email" />

            <Button
              type="submit"
              className="w-full mt-2 bg-gradient-to-tr from-orange-500 to-orange-500 text-white shadow-lg"
              radius="full"
            >
              Forget Password
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
