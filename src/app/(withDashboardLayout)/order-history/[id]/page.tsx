import { Divider } from "@nextui-org/divider";
import React from "react";

export default function OrderDetails() {
  return (
    <div className="p-4 relative flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[70%] shadow-lg border h-auto lg:h-[300px]">
        <Divider />
        <div className="flex justify-between p-5 border">
          <h1 className="text-lg font-semibold">Billing Address</h1>
          <h1 className="text-lg font-semibold">Shipping Address</h1>
        </div>

        <Divider />

        <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-5">
          <div className="w-full lg:w-1/2 lg:relative lg:-top-6">
            <h3 className="font-semibold mb-2">Billing Address</h3>
            <p>Dainne Russell</p>
            <p>4140 Parker Rd, Allentown, New Mexico 31134</p>
            <p className="mt-2">
              <strong>Email:</strong> <br /> dainne.ressell@gmail.com
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> <br /> (671) 555-0110
            </p>
          </div>

          <div className="hidden lg:-top-24 lg:relative lg:block">
            <img
              className="h-[300px] relative"
              src="/line.png"
              alt="Divider Line"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:relative lg:-top-6">
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <p>Dainne Russell</p>
            <p>4140 Parker Rd, Allentown, New Mexico 31134</p>
            <p className="mt-2">
              <strong>Email:</strong> <br /> dainne.ressell@gmail.com
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> <br /> (671) 555-0110
            </p>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="w-full lg:w-[30%] shadow-lg border h-auto lg:h-[300px]">
        <Divider />
        <div className="flex justify-between p-5">
          <h1 className="text-lg font-semibold">
            Order ID: <br /> #847
          </h1>
          <h1 className="text-lg font-semibold">
            Payment <br /> Paypal
          </h1>
        </div>

        <Divider />

        <div className="p-4 lg:p-8">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Subtotal:</h3>
            <p>$365.00</p>
          </div>
          <Divider className="my-2" />
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Discount:</h3>
            <p>20%</p>
          </div>
          <Divider className="my-2" />
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Shipping:</h3>
            <p>Free</p>
          </div>
          <Divider className="my-2" />
          <div className="flex justify-between">
            <h3 className="font-semibold">Total:</h3>
            <p className="text-red-500 font-bold">$84.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
