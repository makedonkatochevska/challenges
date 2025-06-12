import { useEffect, useState } from "react";
import Place from "../Place/Place";
import "./placesContainer.css";
import { PlaceProps } from "../Place/Place";

export default function PlacesContainer() {
  const [places, setPlaces] = useState<PlaceProps[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("http://localhost:5001/places");
        const data = await response.json();
        setPlaces(data);
        console.log("Fetched places:", data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);
  return (
    <section className="places-container">
      {places.map((place: PlaceProps) => {
        return (
          <Place
            place={place.place}
            desc={place.desc}
            id={place.id}
            img={place.img}
            key={place.id}
          />
        );
      })}
    </section>
  );
}
