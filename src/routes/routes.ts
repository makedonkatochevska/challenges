export const ROUTES = {
  HOME: "/",
  DETAIL_PAGE: "restaurant/:restaurantName",
  DETAIL_PAGE_PATH: (restaurantName: string) => `restaurant/${restaurantName}`,
  FAVORITES_PAGE: "favorites",
  CUISINES_PAGE: "cuisines/:cuisineName",
  CUISINES_PAGE_PATH: (name: string) => `cuisines/${name}`,
  ERROR_PAGE: "*",
};
