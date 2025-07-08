export const ROUTES = {
  HOME: "/",
  ARTIST: (id = ":id") => `/artist/${id}`,
  ALBUM: (artistId = ":id", albumId = ":albumId") =>
    `/artist/${artistId}/${albumId}`,
  ERROR: "*",
};
