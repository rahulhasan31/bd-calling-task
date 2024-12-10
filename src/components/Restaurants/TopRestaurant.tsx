import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export const data = [
  {
    id: "07631",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res1.png",
    cta: "Visit",
  },
  {
    id: "01242",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res2.png",
    cta: "Visit",
  },
  {
    id: "03",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res1.png",
    cta: "Visit",
  },
  {
    id: "0321",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res1.png",
    cta: "Visit",
  },
  {
    id: "012",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res2.png",
    cta: "Visit",
  },
  {
    id: "032",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res1.png",
    cta: "Visit",
  },
  {
    id: "0123",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res1.png",
    cta: "Visit",
  },
  {
    id: "0121",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res2.png",
    cta: "Visit",
  },
  {
    id: "035",
    name: "Trattoria dall'Oste",
    address: "Via Luigi Alamanni, 3, 50123 Firenze",
    rating: 4.5,
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: "/res1.png",
    cta: "Visit",
  },
];
export default function TopRestaurant() {
  return (
    <>
      <Link href={"/restaurant/9279"}>
        <div className="mt-5">
          <div>
            <h1 className="text-4xl font-bold">
              Explore{" "}
              <small className="text-4xl text-orange-500">
                Top Restaurants
              </small>
            </h1>
            <h4 className="text-2xl">Check your city Near by Restaurant</h4>
          </div>

          <div className="grid grid-cols-3 gap-5 border-collapse mt-5 max-sm:grid-cols-1">
            {data?.slice(0, 3).map((card: any) => (
              <div key={card?.id}>
                <Card className="py-4">
                  <CardBody className="">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl max-sm:w-full"
                      height={100}
                      src={card?.imageUrl}
                      width={1000}
                    />
                  </CardBody>
                  <CardBody className="">
                    <div className="flex justify-between">
                      <p className=" uppercase font-bold text-2xl">
                        {card?.name}
                      </p>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" /> (4.5)
                      </div>
                    </div>

                    <small className="text-default-500 text-md flex items-center gap-2">
                      <CiLocationOn />
                      {card?.address}
                    </small>
                    <h4 className="text-default-500 text-tiny mt-2">
                      {card?.description}
                    </h4>

                    <Button
                      className="mt-2 text-white bg-green-500"
                      variant="shadow"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
