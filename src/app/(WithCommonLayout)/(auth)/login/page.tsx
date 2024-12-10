"use client";

import FXInput from "@/components/forms/FXInput";
import CommonAuthImage from "@/components/Ui/CommonAuthImage";

import { EyeFilledIcon } from "@/components/Ui/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/Ui/EyeSlashFilledIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <CommonAuthImage />

      <div
        // style={{
        //   backgroundColor: " #f8fafc",
        // }}
        className="lg:flex w-full h-screen mx-auto lg:flex-col items-center"
      >
        <div className="lg:w-[50%] bg-gradient-to-bl from-default-100   max-sm:mx-auto p-5 shadow-lg rounded-lg mt-4 max-md:[50%]">
          <div className="text-center text-3xl font-bold mb-2">Sing In </div>

          <form>
            <FXInput className="lg:w-full mb-5" name="email" label="email" />
            <Input
              className="lg:w-full  "
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
            />
            <div className="flex gap-2 justify-between mt-2">
              <h1>Remember me</h1>
              <Link href={"forget-password"}>Forget Password</Link>
            </div>
            <Button
              className="w-full  mt-2 bg-gradient-to-tr from-orange-500 to-orange-500 text-white shadow-lg"
              radius="full"
            >
              Sing In
            </Button>
          </form>
          <div className="text-center mt-3">
            Don’t have account?{" "}
            <Link className="font-bold" href={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
