import ProductDetails from "@/components/Products/ProductDetails";
import CommonAuthImage from "@/components/Ui/CommonAuthImage";
import CustomerFeedback from "@/components/Ui/CustomerFeedback";
import React from "react";

export default function ProductDetailPage() {
  return (
    <div>
      <CommonAuthImage />
      <ProductDetails />
      <CustomerFeedback />
    </div>
  );
}
