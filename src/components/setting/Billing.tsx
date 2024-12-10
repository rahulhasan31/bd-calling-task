import React from "react";

const Billing = () => {
  return (
    <div>
      <div className="lg:ms-10 mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <p className="text-2xl font-bold text-gray-800">Billing Address</p>
        <div className="mt-10  px-4 pt-8 lg:mt-0">
          <div className="">
            <div className="flex ">
              <div className=" lg:flex max-sm:w-full lg:gap-10 relative w-7/12 flex-shrink-0">
                <div className="lg:flex lg:flex-col">
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    className="lg:w-52 max-sm:w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    name="credit-expiry"
                    placeholder="Dianne"
                    type="text"
                  />
                </div>
                <div className="lg:flex max-sm:w-full lg:flex-col">
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    className="lg:w-52 w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    name="credit-expiry"
                    placeholder="Dianne"
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    Company Name (optional)
                  </label>
                  <input
                    className="lg:w-52 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    name="credit-expiry"
                    placeholder="Zakirsoft"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                id="email"
                name="email"
                placeholder="your.email@gmail.com"
                type="text"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3" />
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Card Holder
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                id="card-holder"
                name="card-holder"
                placeholder="Your full name here"
                type="text"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3" />
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  id="card-no"
                  name="card-no"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  type="text"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                name="credit-expiry"
                placeholder="MM/YY"
                type="text"
              />
              <input
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                name="credit-cvc"
                placeholder="CVC"
                type="text"
              />
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Street Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  id="billing-address"
                  name="billing-address"
                  placeholder="Street Address"
                  type="text"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    alt=""
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                  />
                </div>
              </div>
              <select
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                name="billing-state"
              >
                <option value="State">State</option>
              </select>
              <input
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                name="billing-zip"
                placeholder="ZIP"
                type="text"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button className="mt-4 mb-8   bg-orange-500 px-10 rounded-full py-3 font-medium text-white">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
