import { Link } from "react-router-dom";
import type { ArtistDataType } from "../../types/types";
import { albumImages } from "../../constants/Images";
import style from "./albumList.module.scss";
import { ROUTES } from "../../routes/routes";

interface Prop {
  artist: ArtistDataType;
}
export default function AlbumList({ artist }: Prop) {
  return (
    <div className={style.albumListContainer}>
      {artist.albums.map((album) => {
        const imageSrc = albumImages[
          `../assets/Images/albums/${album.cover}.jpg`
        ] as string;

        return (
          <Link
            to={ROUTES.ALBUM(String(artist.id), String(album.albumId))}
            key={album.albumId}
            state={album}
          >
            <img src={imageSrc} alt={`${album.cover} by ${artist.name}`} />
          </Link>
        );
      })}
    </div>
  );
}
