"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/frez.png");

  const images = ["/frez.png", "/b.png", "/res1.png"];

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-4 lg:p-8">
      {/* Left Section - Image Gallery */}
      <div className="flex lg:w-[80%] w-full lg:flex-row flex-col items-center lg:items-start">
        <div className="flex lg:flex-col lg:space-y-4 lg:mr-4 space-x-4 lg:space-x-0 mb-4 lg:mb-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 border rounded cursor-pointer ${
                selectedImage === img ? "border-green-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="border-2 border-green-400 rounded">
          <img
            src={selectedImage}
            alt="Main Product"
            className="w-full h-auto max-h-[300px] lg:max-h-full"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full lg:w-2/3 pl-0 lg:pl-8 mt-6 lg:mt-0">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Smart Freezer
        </h1>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex text-yellow-500">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
          <p className="text-sm lg:text-base text-gray-500">(4 Reviews)</p>
        </div>
        <p className="text-xl lg:text-2xl font-semibold text-orange-600 mt-4">
          $17.28
        </p>
        <p className="text-sm text-gray-600 mt-2">Category: Freezer</p>
        <p className="text-sm lg:text-base text-gray-700 mt-4">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
          ultrices et ipsum. Nulla varius magna a consequat pulvinar.
        </p>
        <p className="mt-4">
          <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded">
            In Stock
          </span>
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <div className="flex  items-center mt-6 space-x-4">
            <button
              onClick={handleDecrement}
              className="px-3 py-1 text-lg font-semibold bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 text-lg font-semibold bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <Link href={"/checkout"}>
            <div>
              <button className="mt-6 lg:px-[110px] max-sm:px-10 py-3 rounded-full text-white bg-orange-600 shadow hover:bg-orange-700">
                Checkout
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
