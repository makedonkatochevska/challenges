import { useParams } from "react-router-dom";
import { useRestaurantStore } from "../store/restaurantsStore";
import RestaurantCard from "../components/RestaurantCard";
import getAverageRating from "../utils/getAverageRating";

export default function CuisinesPage() {
  const { cuisineName } = useParams();
  const allRestaurants = useRestaurantStore((state) => state.restaurants);
  console.log(cuisineName);

  const cuisineRestaurants = [
    ...new Set(
      allRestaurants.filter((rest) => {
        return rest.restauranttype === cuisineName;
      })
    ),
  ];

  console.log("CUISINE REST", cuisineRestaurants);

  return (
    <div className="pb-4 text-center">
      <h2>{cuisineName} RESTAURANTS</h2>
      {cuisineRestaurants.length === 0 && <h2>No restaurants to show 😔</h2>}
      {cuisineRestaurants.length > 0 && (
        <div className="row gy-4">
          {cuisineRestaurants.map(
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
