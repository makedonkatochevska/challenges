import type { ArtistDataType } from "../../types/types";
import { coverImages } from "../../constants/Images";
import style from "./artistItem.module.scss";

interface Prop {
  artist: ArtistDataType;
}

export default function ArtistItem({ artist }: Prop) {
  const imageSrc = coverImages[
    `../assets/Images/covers/${artist.cover}.jpg`
  ] as string;

  return (
    <div className={style.artistItemContainer}>
      <img src={imageSrc} />
      <span className={style.nameContainer}>{artist.name}</span>
    </div>
  );
}
