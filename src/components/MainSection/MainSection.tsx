import mainStyle from "../../App.module.scss";
import style from "./MainSection.module.scss";
import CardsContainer from "../CardsContainer/CardsContainer";
import Filters from "../Filters/Filters";
import { useEffect, useState } from "react";
import type { cardType } from "../../Data/Types";

export default function MainSection() {
  const [allProducts, setAllProducts] = useState<cardType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<cardType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<{
    type: "gender" | "brand" | null;
    value: string | null;
  }>({ type: null, value: null });

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://challenges.brainster.tech/ajax_data/data.json"
        );
        const data = await response.json();
        setAllProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.log("Error", error);
      }
    }

    fetchData();
  }, []);

  // Filter logic
  useEffect(() => {
    if (!selectedFilter.type || !selectedFilter.value) {
      setFilteredProducts(allProducts);
      return;
    }

    const key: "gender" | "brand" = selectedFilter.type;
    const value = selectedFilter.value;

    const filtered = allProducts.filter((product) => {
      return product[key] === value;
    });

    setFilteredProducts(filtered);
  }, [allProducts, selectedFilter]);

  return (
    <main>
      <div className={`${mainStyle.container} ${style.title}`}>
        <h1>Bikes</h1>
      </div>

      <div className={style.mainSectionInner}>
        <Filters
          productsData={allProducts}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <CardsContainer productsData={filteredProducts} />
      </div>
    </main>
  );
}
