"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

import { EyeSlashFilledIcon } from "@/components/Ui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/Ui/EyeFilledIcon";
export default function ChangePass() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAdd, setIsVisibleAdd] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityAdd = () => setIsVisibleAdd(!isVisibleAdd);

  return (
    <div>
      <div className="lg:ms-10 mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <div className="lg:w-full bg-gradient-to-bl from-default-100   max-sm:mx-auto p-5 shadow-lg rounded-lg mt-4 max-md:[50%]">
          <div className="t text-3xl font-bold mb-2"> Change Password</div>

          <form>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Current Password
            </label>
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
            <div className="lg:flex gap-5 ">
              <div className="lg:flex lg:flex-col w-full">
                <label className="mt-4 mb-2 block text-sm font-medium">
                  New Password Password
                </label>
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
              </div>
              <div className="flex flex-col w-full">
                <label className="mt-4 mb-2 block text-sm font-medium">
                  Confirm Password
                </label>
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
              </div>
            </div>
            <Button
              className=" px-10 py-2  mt-2 bg-gradient-to-tr  from-orange-500 to-orange-500 text-white shadow-lg"
              radius="full"
            >
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
