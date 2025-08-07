import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate(ROUTES.HOME, { replace: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to={ROUTES.ALL_WORKOUTS}>
            <FontAwesomeIcon
              icon={faDumbbell}
              size="2x"
              style={{ transform: "rotate(45deg)" }}
            />
          </Link>

          <Link to={ROUTES.ADD_NEW_WORKOUT}>
            <Button
              color="inherit"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Link>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
