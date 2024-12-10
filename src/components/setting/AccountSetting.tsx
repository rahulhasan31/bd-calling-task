"use client";

import Image from "next/image";
import React, { useState } from "react";

const AccountSettings = () => {
  const [image, setImage] = useState<string | any>("/img.png");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="lg:ms-10 mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Dianne"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Russell"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="dianne.russell@gmail.com"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(603) 555-0123"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition duration-200">
            Save Changes
          </button>
        </div>

        {/* Image Upload Section */}
        <div className="flex flex-col items-center lg:relative lg:-top-14">
          <div className="w-60 h-60 rounded-full overflow-hidden border">
            <Image
              width={500}
              height={500}
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <label className="mt-4 cursor-pointer bg-white text-orange-500 border-2 border-orange-500 font-semibold px-4 py-2 rounded-md hover:bg-orange-100 transition duration-200">
            Choose Image
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
