import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { RestaurantType } from "../types/dataType";

type RestaurantStoreType = {
  restaurants: RestaurantType[];
  favorites: string[];
  setRestaurants: (data: RestaurantType[]) => void;
  toggleFavorite: (id: string) => void;
};

export const useRestaurantStore = create<RestaurantStoreType>()(
  persist(
    (set, get) => ({
      restaurants: [],
      favorites: [],
      setRestaurants: (data) => set({ restaurants: data }),

      toggleFavorite: (id) => {
        const { favorites } = get();
        const updated = favorites.includes(id)
          ? favorites.filter((favId) => favId !== id)
          : [...favorites, id];

        set({ favorites: updated });
        console.log("favorites array", favorites);
      },
    }),
    {
      name: "favorite-restaurants",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
