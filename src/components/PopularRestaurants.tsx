import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useRestaurantStore } from "../store/restaurantsStore";
import getAverageRating from "../utils/getAverageRating";
import { RestaurantType } from "../types/dataType";

export default function PopularRestaurants() {
  const restaurants = useRestaurantStore((state) => state.restaurants);

  const [popularRestaurants, setPopularRestaurants] = useState<
    RestaurantType[]
  >([]);

  useEffect(() => {
    const topRest = [...restaurants]
      .sort((a, b) => b.reviewsList.length - a.reviewsList.length)
      .slice(0, 10);
    setPopularRestaurants(topRest);
  }, [restaurants]);

  if (popularRestaurants.length === 0) {
    return <p>Loading restaurants...</p>;
  }

  return (
    <div className="py-4 border-bottom border-dark-subtle text-center">
      <h2>OUR MOST POPULAR RESTAURANTS</h2>
      <div className="row gy-4">
        {popularRestaurants.map(
          ({
            id,
            businessname,
            image,
            restauranttype,
            reviews,
            reviewsList,
            slug,
          }) => {
            const averageRating = getAverageRating(reviewsList);

            return (
              <div
                className="col position-relative"
                style={{ flex: "0 0 20%", maxWidth: "20%" }}
                key={id}
              >
                <RestaurantCard
                  id={id}
                  title={businessname}
                  img={image}
                  restauranttype={restauranttype}
                  slug={slug}
                >
                  <p className="m-0">Rating - {averageRating}</p>
                  <p className="m-0">Based on {reviews} reviews</p>
                </RestaurantCard>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
