import Items, { ItemData } from "@/components/Items/Items";
import ProductItems from "@/components/Products/ProductItems";
import React from "react";

export default function ShopItems() {
  return (
    <div>
      <div className="mt-5">
        <div className="flex max-sm:flex-wrap justify-center gap-5 items-center">
          {ItemData?.map((item) => (
            <div
              key={item?.id}
              className=" flex-col  px-2  items-center bg-white max-sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 sm:w-40 lg:w-20"
            >
              <img
                alt={item?.name}
                className="w-20 h-20 lg:w-14 lg:h-14 object-contain"
                src={item?.icon}
              />
              <h1 className="  text-center text-sm lg:text-base font-medium ">
                {item?.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <ProductItems />
    </div>
  );
}
