import React from "react";

const data = [
  {
    title: "→ Scope of Service",
    description:
      "a. Bd Calling It will provide custom logo design services to the Client based on the specifications provided by the Client.",
    des: "b. The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.",
  },
  {
    title: "→ Copyright and Ownership",
    description:
      "a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.",
    des: "b. Final payment ensures that only the agreed design becomes the client's property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made.",
  },
];

const About = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-20">
        {/* Header Section */}
        <div className="max-w-xl mx-auto text-center lg:max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-gray-700">
            Welcome to Bd Calling It. Before using our logo design service,
            please carefully review the following Terms and Conditions, as they
            govern the contractual relationship between you, David, and Bd
            Calling It web development. By using our logo design service, you
            acknowledge that you have read, understood, and agreed to these
            Terms and Conditions in their entirety.
          </p>
        </div>

        {/* Terms Section */}
        <div className="mt-12">
          {Array.isArray(data) && data.length > 0 ? (
            <div className="space-y-8">
              {data.map((item, idx) => (
                <div key={idx}>
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-gray-700">{item.des}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700">No terms available at this time.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
