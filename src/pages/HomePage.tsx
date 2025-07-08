import artists from "../data/db";
import ArtistsList from "../components/ArtistList/ArtistsList";

export default function HomePage() {
  const artistsData = artists;

  return (
    <div>
      <h2>Browse the artists</h2>
      <ArtistsList artistsData={artistsData} />
    </div>
  );
}
