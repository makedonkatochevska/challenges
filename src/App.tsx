import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import WelcomePage from "./pages/WelcomePage";
import LoggedInPage from "./pages/LoggedInPage";
import AddNewWorkout from "./components/AddNewWorkout";
import AllWorkouts from "./components/AllWorkouts";
import ErrorPage from "./pages/ErrorPage";
import { useAuthContext } from "./context/AuthContext";
import LoadingBar from "./components/LoadingBar";

const App: React.FC = () => {
  const { user, loading } = useAuthContext();

  if (loading) return <LoadingBar />;

  return (
    <>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={user ? <LoggedInPage /> : <WelcomePage />}
        >
          <Route
            index
            element={
              user ? (
                <Navigate to={ROUTES.ALL_WORKOUTS} replace />
              ) : (
                <Navigate to={ROUTES.HOME} replace />
              )
            }
          />
          <Route
            path={ROUTES.ALL_WORKOUTS}
            element={
              user ? <AllWorkouts /> : <Navigate to={ROUTES.HOME} replace />
            }
          />
          <Route
            path={ROUTES.ADD_NEW_WORKOUT}
            element={
              user ? <AddNewWorkout /> : <Navigate to={ROUTES.HOME} replace />
            }
          />
        </Route>

        <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
