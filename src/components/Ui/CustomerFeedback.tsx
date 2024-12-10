"use client";

import { Divider } from "@nextui-org/divider";

export default function CustomerFeedback() {
  const reviews = [
    {
      name: "Kristin Watson",
      rating: 5,
      feedback: "Duis at ullamcorper nulla, eu dictum eros.",
      time: "2 min ago",
      avatar: "/ava.png",
    },
    {
      name: "Jane Cooper",
      rating: 4,
      feedback:
        "Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to 'bolt' or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.",
      time: "30 Apr, 2021",
      avatar: "/ava.png",
    },
    {
      name: "Jacob Jones",
      rating: 5,
      feedback:
        "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
      time: "2 min ago",
      avatar: "/ava.png",
    },
    {
      name: "Ralph Edwards",
      rating: 5,
      feedback:
        "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA.",
      time: "2 min ago",
      avatar: "/ava.png",
    },
  ];

  return (
    <div className=" text-black p-8">
      <h2 className="text-2xl font-bold mb-6">Customer Feedback</h2>
      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div key={index}>
            {/* Review Item */}
            <div className="flex flex-col lg:flex-col space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 lg:ms-5 rounded-full border border-gray-600"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex text-orange-500">
                    {Array(review.rating)
                      .fill("")
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm lg:text-base text-gray-900">
                  {review.feedback}
                </p>
              </div>
              <div className="text-sm lg:text-base text-gray-900 lg:text-right">
                {review.time}
              </div>
            </div>

            {/* Divider */}
            {index < reviews.length - 1 && <Divider className="my-4 " />}
          </div>
        ))}
      </div>
    </div>
  );
}
