import "./place.css";

export interface PlaceProps {
  id: number;
  place: string;
  desc: string;
  img: string;
}

export default function Place({ id, place, desc, img }: PlaceProps) {
  return (
    <div
      className="place"
      id={id.toString()}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h4>{place}</h4>
      <p>{desc}</p>
    </div>
  );
}
