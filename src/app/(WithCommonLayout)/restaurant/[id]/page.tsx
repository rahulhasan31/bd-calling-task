import Items from "@/components/Items/Items";
import ProductItems from "@/components/Products/ProductItems";
import Carousel from "@/components/Restaurants/Carousel";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function SingleRestaurant() {
  return (
    <>
      <Carousel />
      <div className="mt-2">
        <h1 className="text-3xl font-semibold">
          {" "}
          <small className="text-3xl text-green-500">Villagio</small> Restaurant
          & Bar
        </h1>

        <div className="flex items-center gap-5 ">
          <CiLocationOn className="text-2xl text-green-500" />
          <h1 className="">
            360 San Lorenzo Avenue, Suite <br />
            1430 Coral Gables, FL 33146-1865
          </h1>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          {" "}
          <div className="flex text-2xl">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaRegStar className="text-orange-500" />
          </div>
          (4)
        </div>
      </div>

      <Items />
      <ProductItems />
    </>
  );
}
