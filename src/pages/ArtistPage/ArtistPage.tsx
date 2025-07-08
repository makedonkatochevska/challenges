import { useParams } from "react-router-dom";
import artists from "../../data/db";
import AlbumList from "../../components/AlbumList/AlbumList";
import { coverImages } from "../../constants/Images";
import style from "./artistPage.module.scss";

export default function ArtistPage() {
  const { id } = useParams();
  const artist = artists.find((a) => a.id.toString() === id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const imageSrc = coverImages[
    `../assets/Images/covers/${artist.cover}.jpg`
  ] as string;

  return (
    <div className={style.container}>
      <img src={imageSrc} alt={artist.name} />
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
      <AlbumList artist={artist} />
    </div>
  );
}
