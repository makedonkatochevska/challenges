import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner.tsx";
import DetailsBlock from "./components/DetailsBlock/DetailsBlock.tsx";
import Footer from "./components/Footer/Footer.tsx";
import PlacesContainer from "./components/PlacesContainer/PlacesContainer.tsx";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <main>
        <DetailsBlock
          title="Stories of Adventure"
          image="https://picsum.photos/id/191/1200/1200"
          key={0}
        />
        <PlacesContainer />
        <DetailsBlock
          title="Popular Adventures"
          image="https://picsum.photos/id/77/1200/1200"
          key={1}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
