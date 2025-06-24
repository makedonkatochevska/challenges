import style from "./CardsContainer.module.scss";
import mainStyle from "../../App.module.scss";
import Card from "../Card/Card";
import type { cardType } from "../../Data/Types";

interface Prop {
  productsData: cardType[];
}

export default function CardsContainer({ productsData }: Prop) {
  return (
    <section className={`${style.cardsContainer} ${mainStyle.container}`}>
      {productsData.map((product, idx) => {
        return (
          <Card
            key={idx}
            name={product.name}
            price={product.price}
            image={product.image}
            gender={product.gender}
            brand={product.brand}
          ></Card>
        );
      })}
    </section>
  );
}
