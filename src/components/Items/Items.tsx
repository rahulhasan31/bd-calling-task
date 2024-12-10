import React from "react";

export const ItemData = [
  {
    id: 1324,
    name: "Milk",
    icon: "/Icon.png",
  },

  {
    id: 3,
    name: "Shirt",
    icon: "/a1.png",
  },
  {
    id: 83,
    name: "Noodles",
    icon: "/f1.png",
  },
  {
    id: 411,
    name: "Dessert",
    icon: "/dd.png",
  },
  {
    id: 1132,
    name: "Rice",
    icon: "/e1.png",
  },
  {
    id: 1,
    name: "Milk",
    icon: "/Icon.png",
  },
  {
    id: 832,
    name: "Noodles",
    icon: "/f1.png",
  },
  {
    id: 5,
    name: "Toy",
    icon: "/d1.png",
  },
  {
    id: 6,
    name: "Book",
    icon: "/b1.png",
  },

  {
    id: 8,
    name: "Noodles",
    icon: "/f1.png",
  },

  {
    id: 11,
    name: "Rice",
    icon: "/e1.png",
  },
];

export default function Items() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Items </h1>
        <h2 className=" text-xl text-white bg-green-400 px-3 py-1 rounded-full ">
          See all
        </h2>
      </div>
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
  );
}
