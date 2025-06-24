import mainStyle from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className={mainStyle.bodyWrapper}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
