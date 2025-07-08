export type ArtistDataType = {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: AlbumsType[];
};

type AlbumsType = {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
};
