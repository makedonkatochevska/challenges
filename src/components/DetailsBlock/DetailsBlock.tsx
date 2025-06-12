import "./detailsBlock.css";

interface DetailsBlockProps {
  title: string;
  image: string;
}

export default function DetailsBlock({ title, image }: DetailsBlockProps) {
  return (
    <section className="details-block wrapper">
      <div className="content-container">
        <div className="description-container">
          <h2>ABOUT</h2>
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            rem dolore quod sint expedita voluptates. Voluptatem reiciendis
            velit enim quod iste eveniet. Labore aut incidunt consectetur
            dolorem amet cum inventore. Voluptatem reiciendis velit enim quod
            iste eveniet.
            <br />
            <br />
            Labore aut incidunt consectetur dolorem amet cum inventore. Labore
            aut incidunt consectetur dolorem amet cum inventore.
          </p>
        </div>
        <div className="image-container">
          <img
            src={image}
            alt="details section image"
            className="details-section-img"
          />
        </div>
      </div>
    </section>
  );
}
