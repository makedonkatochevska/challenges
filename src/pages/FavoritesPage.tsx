import { useRestaurantStore } from "../store/restaurantsStore";
import RestaurantCard from "../components/RestaurantCard";
import getAverageRating from "../utils/getAverageRating";
import { RestaurantType } from "../types/dataType";

export default function FavoritesPage() {
  const favorites: string[] = useRestaurantStore((state) => state.favorites);
  const allRestaurants = useRestaurantStore((state) => state.restaurants);

  const favoriteRestaurants: RestaurantType[] = favorites
    .map((favId) => allRestaurants.find((rest) => rest.id === favId))
    .filter((rest): rest is RestaurantType => rest !== undefined);

  console.log(favoriteRestaurants);

  return (
    <div className="pb-4 text-center">
      <h2>YOUR FAVORITE RESTAURANTS</h2>
      {favoriteRestaurants.length === 0 && <h2>You don't have favorites 😔</h2>}
      {favoriteRestaurants.length > 0 && (
        <div className="row gy-4">
          {favoriteRestaurants.map(
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
                <div className="col-12 position-relative">
                  <RestaurantCard
                    slug={slug}
                    key={id}
                    id={id}
                    title={businessname}
                    img={image}
                    restauranttype={restauranttype}
                  >
                    <p className="m-0">Rating - {averageRating}</p>
                    <p className="m-0">Based on {reviews} reviews</p>
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
