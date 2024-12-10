import Brenner from "@/components/Branner/Brenner";
import BrannerTwo from "@/components/Branner/BrannerTwo";
import TopRestaurant from "@/components/Restaurants/TopRestaurant";
import ProductsSection from "@/components/Products/ProductsSection";

export default function Home() {
  return (
    <section className="">
      {/* brenner section added  and Home page Component added */}
      <Brenner />
      <BrannerTwo />
      <TopRestaurant />
      <ProductsSection />
    </section>
  );
}
