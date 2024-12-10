import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

import { FaStar } from "react-icons/fa6";

import { Button } from "@nextui-org/button";
import { data } from "@/components/Restaurants/TopRestaurant";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Restaurant() {
  return (
    <div className="mt-5">
      <div className=" flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Explore{" "}
            <small className="text-4xl text-orange-500">Top Restaurants</small>
          </h1>
          <h4 className="text-2xl">Check your city Near by Restaurant</h4>
        </div>
      </div>
      <div className=" relative lg:-top-12 lg:left-[900px] rounded-s-full rounded-e-full py-1 border  flex justify-between w-80">
        <div className="flex bg-orange-500 rounded-s-2xl ms-1 items-center text-white py-1 px-3 ">
          <CiLocationOn />
          Location
        </div>
        <div className=" bg-orange-500 py-2 px-3 me-2 rounded-2xl  text-lg">
          <CiSearch className="  text-white " />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 border-collapse mt-5 max-sm:grid-cols-1">
        {data?.map((card: any) => (
          <div key={card?.id}>
            <Card className="py-4">
              <CardBody className="">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl max-sm:w-full"
                  src={card?.imageUrl}
                  width={1000}
                  height={100}
                />
              </CardBody>
              <CardBody className="">
                <div className="flex justify-between">
                  <p className=" uppercase font-bold text-2xl">{card?.name}</p>
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
                <Link href={"/restaurant/72452"}>
                  {" "}
                  <Button
                    variant="shadow"
                    className="mt-2 text-white bg-green-500"
                  >
                    Visit
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
