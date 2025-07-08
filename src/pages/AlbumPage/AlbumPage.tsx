import { useLocation } from "react-router-dom";
import { albumImages } from "../../constants/Images";
import style from "./albumPage.module.scss";

export default function AlbumPage() {
  const location = useLocation();
  const { cover, title, year, price } = location.state;

  const imageSrc = albumImages[
    `../assets/Images/albums/${cover}.jpg`
  ] as string;

  return (
    <div className={style.container}>
      <img src={imageSrc} alt={title} />
      <p>
        Title: <span>{title}</span>
      </p>
      <p>
        Year: <span>{year}</span>
      </p>
      <p>
        Price: <span>${price}</span>
      </p>
    </div>
  );
}
