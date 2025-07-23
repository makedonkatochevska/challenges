import SurpriseRestaurant from "../components/SurpriseRestaurant";
import PopularRestaurants from "../components/PopularRestaurants";
import Cuisines from "../components/Cuisines";
import AllRestaurants from "../components/AllRestaurants";

export default function HomePage() {
  return (
    <div>
      <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </div>
  );
}
