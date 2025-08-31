import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CategoryPicker from "@/components/CategoryPicker";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Banner />

      <CategoryPicker />

      <FeaturedProducts />

      <FeaturedBlogs />
    </div>
  );
}
