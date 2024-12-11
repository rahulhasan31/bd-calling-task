import Image from "next/image";
import React from "react";
import { Input } from "@nextui-org/input";

import { SearchIcon } from "../icons";

//this is added search menu
export const searchInput = (
  <Input
    aria-label="Search"
    classNames={{
      inputWrapper: "bg-default-100",
      input: "text-lg",
    }}
    endContent={
      <SearchIcon className="text-base   pointer-events-none flex-shrink-0" />
    }
    labelPlacement="outside"
    placeholder="Search..."
    startContent={
      <button className=" items-center text-default-100 font-semibold rounded-s-full relative right-4 lg:inline-block bg-green-500 py-2 px-3  ">
        Location
      </button>
    }
    type="search"
  />
);
export default function Brenner() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 max-sm:text-2xl max-sm:w-full  lg:text-5xl font-bold tracking-tight  sm:text-4xl sm:leading-none ">
            Good{" "}
            <small className="text-2xl lg:text-5xl text-orange-400">food</small>
            , great
            <br className="hidden md:block" />
            memories
          </h2>
          <p className="mb-5 text-base text-black md:text-2xl max-sm:text-2xl ">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>
        </div>

        <div className="lg:w-96">{searchInput}</div>
      </div>

      <div className=" inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute lg:-top-28 lg:h-[500px] xl:px-0">
        <Image
          alt=""
          className=" object-cover rounded  lg:rounded-none lg:shadow-none lg:h-full"
          height={500}
          src="/c.png"
          width={500}
        />
      </div>
      <div>
        <img
          alt="img"
          className="lg:-top-12 lg:left-48 absolute w-[580px] "
          src="/q.png"
        />
      </div>
    </div>
  );
}
