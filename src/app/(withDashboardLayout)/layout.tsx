"use client";

import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className=" ">
        <div className=" flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg: max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          <div className="bg-gradient-to-bl bg-default-100 lg:h-96 px-2 ">
            <div className="flex text-black items-center justify-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:px-14">
              <Link
                className="text-black p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>{" "}
                <span className="max-sm:hidden lg:ms-2">Dashboard</span>
              </Link>
              <Link
                className="text-black p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="/order-history"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-sm:hidden lg:ms-2">Order History</span>
              </Link>
              <Link
                className="text-black p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="/setting"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-sm:hidden lg:ms-2">Setting</span>
              </Link>
              <Link
                className="text-black p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-sm:hidden lg:ms-2">Logout</span>
              </Link>
            </div>
            <div className="flex items-center flex-row space-x-2 "></div>
          </div>

          <div className="flex-1 px-2 sm:px-0">
            <div className=" ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
