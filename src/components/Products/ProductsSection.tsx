"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

export default function ProductsSection() {
  //product section Data

  const Data = [
    {
      id: 1,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/a.png",
    },
    {
      id: 2,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/b.png",
    },
    {
      id: 3,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/cc.png",
    },
    {
      id: 4,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/e.png",
    },
    {
      id: 5,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/f.png",
    },
    {
      id: 6,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/a.png",
    },
    {
      id: 7,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/b.png",
    },
    {
      id: 8,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/cc.png",
    },
    {
      id: 9,
      name: "Skateboard Shoe",
      price: "$125",
      imageUrl: "/f.png",
    },
  ];

  return (
    <div className="mt-5">
      <div>
        <h1 className="text-4xl font-bold">
          <small className="text-4xl text-orange-500">Products</small>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5 border-collapse mt-5 max-sm:grid-cols-1">
        {Data?.map((card: any) => (
          <div key={card?.id}>
            <Card className="rounded-t-2xl">
              <Image
                alt="Card background"
                className="w-full object-cover rounded-xl  max-sm:w-full"
                src={card?.imageUrl}
                width={500}
                height={100}
              />
            </Card>
            <div>
              <b>{card.name}</b>
              <p className="text-default-500">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
