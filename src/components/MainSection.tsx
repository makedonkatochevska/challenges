import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useRestaurantStore } from "../store/restaurantsStore";
import { RestaurantType } from "../types/dataType";

export default function MainSection() {
  const { data, loading, error } = useFetch<RestaurantType[]>(
    "http://localhost:5001/restaurants"
  );
  const setRestaurants = useRestaurantStore((state) => state.setRestaurants);

  useEffect(() => {
    if (data?.length) {
      setRestaurants(data);
    }
  }, [data]);

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>Error loading restaurants</p>;

  return (
    <div className="py-3">
      <Outlet />
    </div>
  );
}
