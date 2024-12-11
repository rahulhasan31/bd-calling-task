import Image from "next/image";
import React from "react";

export default function BrannerTwo() {
  return (
    <div className="lg:flex lg:w-[90%] lg:mx-auto gap-5 lg:justify-center bg-gradient-to-b bg-default-100 shadow-lg p-7">
      <div className="flex flex-col lg:flex-row gap-3 items-center text-center lg:text-left">
        <Image
          alt="Discount Icon"
          className="w-auto h-auto"
          height={100}
          src="/Group.png"
          width={100}
        />
        <div>
          <h1 className="font-bold text-lg">Free Delivery</h1>
          <h2 className="text-sm text-gray-600">Every week new sales</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 items-center text-center lg:text-left">
        <Image
          alt="Discount Icon"
          className="w-auto h-auto"
          height={100}
          src="/car.png"
          width={100}
        />
        <div>
          <h1 className="font-bold text-lg">Free Delivery</h1>
          <h2 className="text-sm text-gray-600">100% Free for all orders</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 items-center text-center lg:text-left">
        <Image
          alt="Discount Icon"
          className="w-auto h-auto"
          height={100}
          src="/h.png"
          width={100}
        />
        <div>
          <h1 className="font-bold text-lg">Great Support 24/7</h1>
          <h2 className="text-sm text-gray-600">We care your experiences</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 items-center text-center lg:text-left">
        <Image
          alt="Discount Icon"
          className="w-auto h-auto"
          height={100}
          src="/shield.png"
          width={100}
        />
        <div>
          <h1 className="font-bold text-lg">secure Payment</h1>
          <h2 className="text-sm text-gray-600">100% Secure Payment Method</h2>
        </div>
      </div>
    </div>
  );
}
