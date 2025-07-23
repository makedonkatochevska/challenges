import { useRestaurantStore } from "../store/restaurantsStore";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Cuisines() {
  const allRestaurants = useRestaurantStore((state) => state.restaurants);

  const cuisines = [
    ...new Set(allRestaurants.map((rest) => rest.restauranttype)),
  ];

  {
    cuisines.length === 0 && <p>Loading...</p>;
  }
  return (
    <div className="py-4 border-bottom border-dark-subtle text-center">
      <h2>CUISINES</h2>
      <div className="gy-4">
        {cuisines.map((cus) => (
          <Link to={ROUTES.CUISINES_PAGE_PATH(cus)}>
            <button key={cus} className="btn btn-danger me-2">
              {cus}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
