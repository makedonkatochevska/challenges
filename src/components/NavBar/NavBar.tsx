import { useNavigate } from "react-router-dom";
import "./navBar.module.scss";
import { ROUTES } from "../../routes/routes";

export default function NavBar() {
  const navigate = useNavigate();

  const navigateHomePage = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <header onClick={navigateHomePage}>
      <h1>music db</h1>
    </header>
  );
}
