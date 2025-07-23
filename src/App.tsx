import { StrictMode } from "react";
import style from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import CousinesPage from "./pages/CuisinesPage";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { useFetch } from "./hooks/useFetch";
import CuisinesPage from "./pages/CuisinesPage";

const App = () => {
  return (
    <StrictMode>
      <div className={style.Container}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainSection />}>
              <Route index element={<HomePage />} />
              <Route path={ROUTES.DETAIL_PAGE} element={<DetailPage />} />
              <Route path={ROUTES.FAVORITES_PAGE} element={<FavoritesPage />} />
              <Route path={ROUTES.CUISINES_PAGE} element={<CuisinesPage />} />
              <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </StrictMode>
  );
};

export default App;
