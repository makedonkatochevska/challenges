import type { cardType } from "../../Data/Types";
import style from "./Card.module.scss";

export default function Card({ name, price, gender, brand, image }: cardType) {
  return (
    <div className={style.card} data-gender={gender} data-brand={brand}>
      <img src={`../../../public/img/${image}.png`} alt="" />
      <div className={style.titleContainer}>
        <h4>{name}</h4>
        <p>${price} </p>
      </div>
    </div>
  );
}
