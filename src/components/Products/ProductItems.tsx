import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Data = [
  {
    id: 1,
    name: "Long Sleeve T-Shirt",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/shirt.png",
  },
  {
    id: 2,
    name: "Long Sleeve T-Shirt",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/shirt.png",
  },
  {
    id: 3,
    name: "Crazy Taco",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/toy.png",
  },
  {
    id: 4,
    name: "Crazy Toy",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/toy.png",
  },
  {
    id: 5,
    name: "The Book",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/book.png",
  },
  {
    id: 6,
    name: "Crazy Toy",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/toy.png",
  },
  {
    id: 7,
    name: "Crazy Toy",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/toy.png",
  },
  {
    id: 8,
    name: "The Book",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/book.png",
  },
  {
    id: 9,
    name: "Crazy Toy",
    description: "Delicious tacos, appetizing...",
    price: "$45.5",
    imageUrl: "/toy.png",
  },
];

export default function ProductItems() {
  return (
    <div>
      <Link href={"/item/64387"}>
        <div className="grid grid-cols-3 gap-5 border-collapse mt-5 max-sm:grid-cols-1">
          {Data?.map((card: any) => (
            <div key={card?.id}>
              <Card className="rounded-t-2xl">
                <Image
                  alt="Card background"
                  className="w-full object-cover rounded-xl  max-sm:w-full"
                  height={100}
                  src={card?.imageUrl}
                  width={500}
                />
                <CardBody>
                  <div className="flex justify-between">
                    <b>{card.name}</b>
                    <p className="text-default-900">{card.price}</p>
                  </div>
                  <div>{card?.description}</div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
