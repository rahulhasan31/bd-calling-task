"use client";

import FXInput from "@/components/forms/FXInput";
import CommonAuthImage from "@/components/Ui/CommonAuthImage";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter();
  //this is set new password route if you need next step please just enter your email and click forget passaword button
  const onSubmitHandle = (e: any) => {
    e.preventDefault();
    if (e) {
      router.push("/set-new-password");
    }
  };
  return (
    <>
      <CommonAuthImage />

      <div className="lg:flex w-full h-screen mx-auto lg:flex-col items-center">
        <div className="lg:w-[50%] bg-gradient-to-bl from-default-100   max-sm:mx-auto p-5 shadow-lg rounded-lg mt-4 max-md:[50%]">
          <div className="text-center text-3xl font-bold mb-2">
            Forgot password
          </div>

          <form onSubmit={onSubmitHandle}>
            <FXInput className="lg:w-full mb-5" name="email" label="Email" />

            <Button
              type="submit"
              className="w-full  mt-2 bg-gradient-to-tr  from-orange-500 to-orange-500 text-white shadow-lg"
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
