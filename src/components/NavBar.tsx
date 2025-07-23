import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function NavBar() {
  return (
    <div className="row py-4 border-bottom border-dark-subtle align-items-center m-0">
      <div className="col-6 p-0">
        <Link to={ROUTES.HOME}>
          <h1>RESTAURANT</h1>
        </Link>
      </div>
      <div className="col-6 d-flex ;p-0 justify-content-end ">
        <Link to={ROUTES.FAVORITES_PAGE}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#f50000", fontSize: "30px" }}
          />
        </Link>
      </div>
    </div>
  );
}
