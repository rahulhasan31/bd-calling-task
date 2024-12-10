"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

import CommonAuthImage from "@/components/Ui/CommonAuthImage";
import { EyeFilledIcon } from "@/components/Ui/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/Ui/EyeSlashFilledIcon";

export default function SetNewPassword() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAdd, setIsVisibleAdd] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityAdd = () => setIsVisibleAdd(!isVisibleAdd);

  return (
    <>
      <CommonAuthImage />

      <div className="lg:flex w-full h-screen mx-auto lg:flex-col items-center">
        <div className="lg:w-[50%] bg-gradient-to-bl from-default-100   max-sm:mx-auto p-5 shadow-lg rounded-lg mt-4 max-md:[50%]">
          <div className="text-center text-3xl font-bold mb-2">
            {" "}
            Set New Password
          </div>

          <form>
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
            <Input
              className="lg:w-full mt-2 "
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibilityAdd}
                >
                  {isVisibleAdd ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              placeholder="Confirm your password"
              type={isVisibleAdd ? "text" : "password"}
              variant="bordered"
            />

            <Button
              className="w-full  mt-2 bg-gradient-to-tr  from-orange-500 to-orange-500 text-white shadow-lg"
              radius="full"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
