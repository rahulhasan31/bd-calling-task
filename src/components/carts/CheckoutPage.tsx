"use client";
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { useDisclosure } from "@nextui-org/modal";

import OrderModal from "../Modal/OrderModal";

export default function CheckoutForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="relative mx-auto w-full bg-gradient-to-bl bg-default-100">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Billing Information
                <span className="mt-2 block h-1 w-10 bg-orange-600 sm:w-20" />
              </h1>
              <form action="" className="mt-10 flex flex-col space-y-4">
                <div>
                  <label
                    className="text-xs font-semibold text-gray-500"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    type="email"
                  />
                </div>
                <div className="relative">
                  <label
                    className="text-xs font-semibold text-gray-500"
                    htmlFor="card-number"
                  >
                    Card number
                  </label>
                  <input
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    type="text"
                  />
                  <img
                    alt="Card icon"
                    className="absolute bottom-3 right-3 max-h-4"
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Expiration date
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <label className="sr-only" htmlFor="month">
                        Select expiration month
                      </label>
                      <select
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                        id="month"
                        name="month"
                      >
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div className="my-1 ml-3 mr-6">
                      <label className="sr-only" htmlFor="year">
                        Select expiration year
                      </label>
                      <select
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                        id="year"
                        name="year"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div className="relative my-1">
                      <label className="sr-only" htmlFor="security-code">
                        Security code
                      </label>
                      <input
                        className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="card-name">
                    Card name
                  </label>
                  <input
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:top-10 lg:py-24 lg:right-10">
            <div>
              <div className="absolute p-5 inset-0 lg:h-[90%] w-full bg-white opacity-95">
                <div className="relative">
                  <h1 className="text-2xl font-bold mb-2">Order Summary</h1>
                  <ul className="space-y-5">
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <img
                          alt="Product Image"
                          className="max-h-16"
                          src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <div className="ml-3">
                          <p className="text-base font-semibold text-black">
                            Nano Titanium Hair Dryer
                          </p>
                          <p className="text-sm font-medium text-black text-opacity-80">
                            Pdf, doc Kindle
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-black">
                        $260.00
                      </p>
                    </li>
                    <Divider className="my-4" />
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <img
                          alt="Product Image"
                          className="max-h-16"
                          src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <div className="ml-3">
                          <p className="text-base font-semibold text-black">
                            Luisia H35
                          </p>
                          <p className="text-sm font-medium text-black text-opacity-80">
                            Hair Dryer
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-black">
                        $350.00
                      </p>
                    </li>
                  </ul>
                  <div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
                  <Divider className="my-4" />
                  <div className="space-y-2">
                    <p className="flex text-black justify-between text-lg font-bold ">
                      <span>Total price:</span>
                      <span>$510.00</span>
                    </p>
                  </div>
                  <div className="mt-3">
                    <h1 className="text-3xl">Payment Method</h1>
                  </div>
                  <div className="flex flex-col ">
                    <Checkbox
                      className="text-white mb-3 mt-2 rounded-full"
                      color="warning"
                      value="buenos-aires"
                    >
                      Cash on Delivery
                    </Checkbox>

                    <Checkbox value="buenos-aires">Paypal</Checkbox>

                    <OrderModal
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onOpenChange={onOpenChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
