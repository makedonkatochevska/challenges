import "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import MainLayout from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import ErrorPage from "./pages/ErrorPage";
import { ROUTES } from "./routes/routes";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <>
              <MainLayout />
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path={ROUTES.ARTIST()} element={<ArtistPage />} />
          <Route path={ROUTES.ALBUM()} element={<AlbumPage />} />
          <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
