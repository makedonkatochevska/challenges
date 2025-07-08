export const albumImages = import.meta.glob("../assets/Images/albums/*", {
  eager: true,
  import: "default",
});

export const coverImages = import.meta.glob("../assets/Images/covers/*", {
  eager: true,
  import: "default",
});
