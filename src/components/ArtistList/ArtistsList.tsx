import { Link } from "react-router-dom";
import type { ArtistDataType } from "../../types/types";
import ArtistItem from "../ArtistItem/ArtistItem";
import style from "./artistsList.module.scss";
import { ROUTES } from "../../routes/routes";

interface Prop {
  artistsData: ArtistDataType[];
}

export default function ArtistsList({ artistsData }: Prop) {
  return (
    <div className={style.artistsList}>
      {artistsData.map((artist) => (
        <Link to={ROUTES.ARTIST(String(artist.id))} key={artist.id}>
          <ArtistItem artist={artist} />
        </Link>
      ))}
    </div>
  );
}
