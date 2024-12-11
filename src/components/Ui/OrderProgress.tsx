import React from "react";

const OrderProgress = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto py-8">
      {/* Step 1: Order Received */}
      <div className="relative flex flex-col items-center text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
          <span className="text-lg">✓</span>
        </div>
        <span className="absolute top-12 text-orange-500 font-medium">
          Order received
        </span>
      </div>

      {/* Line Segment */}
      <div className="flex-1 h-1 bg-orange-500"></div>

      {/* Step 2: Processing */}
      <div className="relative flex flex-col items-center text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
          <span className="text-lg">02</span>
        </div>
        <span className="absolute top-12 text-orange-500 font-medium">
          Processing
        </span>
      </div>

      {/* Line Segment */}
      <div className="flex-1 h-1 bg-orange-500"></div>

      {/* Step 3: On the Way */}
      <div className="relative flex flex-col items-center text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
          <span className="text-lg">03</span>
        </div>
        <span className="absolute flex top-12 text-orange-500 font-medium">
          On the way
        </span>
      </div>

      {/* Line Segment */}
      <div className="flex-1 h-1 bg-orange-500"></div>

      {/* Step 4: Delivered */}
      <div className="relative flex flex-col items-center text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
          <span className="text-lg">04</span>
        </div>
        <span className="absolute top-12 text-orange-500 font-medium">
          Delivered
        </span>
      </div>
    </div>
  );
};

export default OrderProgress;
