import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
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
