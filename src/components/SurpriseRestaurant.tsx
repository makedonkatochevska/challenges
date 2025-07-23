import { useRestaurantStore } from "../store/restaurantsStore";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function SurpriseRestaurant() {
  const allRestaurants = useRestaurantStore((state) => state.restaurants);

  const navigate = useNavigate();

  const handleSurpriseRestaurant = () => {
    if (allRestaurants.length === 0) return;

    const randomIndex = Math.floor(Math.random() * allRestaurants.length);
    const randomRestaurant = allRestaurants[randomIndex];

    if (randomRestaurant?.slug) {
      navigate(ROUTES.DETAIL_PAGE_PATH(randomRestaurant.slug));
    }
  };

  return (
    <div className="pb-4 border-bottom border-dark-subtle text-center">
      <h2>DON'T KNOW WHAT TO EAT?</h2>
      <button
        className="btn btn-success w-100"
        onClick={handleSurpriseRestaurant}
      >
        SURPRISE ME!
      </button>
    </div>
  );
}
