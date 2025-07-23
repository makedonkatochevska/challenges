import { useRestaurantStore } from "../store/restaurantsStore";
import getAverageRating from "../utils/getAverageRating";
import RestaurantCard from "./RestaurantCard";

export default function AllRestaurants() {
  const allRestaurants = useRestaurantStore((state) => state.restaurants);

  return (
    <div className="py-4 text-center">
      <h2>ALL RESTAURANTS</h2>
      {allRestaurants.length === 0 && <p>Loading...</p>}
      {allRestaurants.length > 0 && (
        <div className="row gy-4">
          {allRestaurants.map(
            ({
              id,
              businessname,
              image,
              restauranttype,
              reviews,
              reviewsList,
              slug,
            }) => {
              const averageRating = +getAverageRating(reviewsList);

              return (
                <div
                  className="col position-relative"
                  style={{ flex: "0 0 20%", maxWidth: "20%" }}
                  key={id}
                >
                  <RestaurantCard
                    slug={slug}
                    id={id}
                    title={businessname}
                    img={image}
                    restauranttype={restauranttype}
                  >
                    {averageRating !== 0 && (
                      <>
                        <p className="m-0">Rating - {averageRating}</p>
                        <p className="m-0">Based on {reviews} reviews</p>
                      </>
                    )}
                  </RestaurantCard>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
