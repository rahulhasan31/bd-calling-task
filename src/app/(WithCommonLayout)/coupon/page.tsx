import Image from "next/image";
import React from "react";

export default function Coupon() {
  return (
    <div className=" ">
      <h1 className="text-2xl font-medium text-orange-500 mb-4">
        Coupon Cards
      </h1>
      <div className=" grid grid-cols-2 max-sm:grid-cols-1 justify-center mx-auto">
        <div>
          <Image src={"/coupon.png"} alt="img" width={500} height={500} />
        </div>
        <div>
          <Image src={"/coupona.png"} alt="img" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
