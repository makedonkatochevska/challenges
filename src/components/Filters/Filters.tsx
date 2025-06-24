import mainStyle from "../../App.module.scss";
import style from "./Filters.module.scss";
import type { cardType } from "../../Data/Types";
import EachFilter from "../EachFilter/EachFilter";

interface Prop {
  productsData: cardType[];
  selectedFilter: {
    type: "gender" | "brand" | null;
    value: string | null;
  };
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<{
      type: "gender" | "brand" | null;
      value: string | null;
    }>
  >;
}

export default function Filters({
  productsData,
  selectedFilter,
  setSelectedFilter,
}: Prop) {
  // Filter display
  const genders = Array.from(
    new Set(productsData.map((product) => product.gender))
  );

  const genderCounts = genders.map((gender) => ({
    gender,
    count: productsData.filter((product) => product.gender === gender).length,
  }));

  const brands = Array.from(
    new Set(productsData.map((product) => product.brand))
  );

  const brandCounts = brands.map((brand) => ({
    brand,
    count: productsData.filter((product) => product.brand === brand).length,
  }));

  return (
    <aside className={mainStyle.container}>
      <h2>Filter by:</h2>
      <div className={style.filterContainer}>
        <ul>
          <EachFilter
            label="Show all"
            count={productsData.length}
            onClick={() => setSelectedFilter({ type: null, value: null })}
            isActive={!selectedFilter.type}
          />
        </ul>
      </div>

      <div className={style.filterContainer}>
        <h3>Gender</h3>
        <ul>
          {genderCounts.map(({ gender, count }) => (
            <EachFilter
              key={gender}
              label={gender}
              count={count}
              onClick={() =>
                setSelectedFilter((prev) =>
                  prev.type === "gender" && prev.value === gender
                    ? { type: null, value: null }
                    : { type: "gender", value: gender }
                )
              }
              isActive={
                selectedFilter.type === "gender" &&
                selectedFilter.value === gender
              }
            />
          ))}
        </ul>
      </div>
      <div className={style.filterContainer}>
        <h3>Brand</h3>
        <ul>
          {brandCounts.map(({ brand, count }) => (
            <EachFilter
              key={brand}
              label={brand}
              count={count}
              onClick={() =>
                setSelectedFilter((prev) =>
                  prev.type === "brand" && prev.value === brand
                    ? { type: null, value: null }
                    : { type: "brand", value: brand }
                )
              }
              isActive={
                selectedFilter.type === "brand" &&
                selectedFilter.value === brand
              }
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}
