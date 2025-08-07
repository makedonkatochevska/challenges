import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import { useAuthContext } from "../context/AuthContext";

export default function WelcomePage() {
  const { logIn } = useAuthContext();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        px: 2,
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/images/heroBanner.jpeg" alt="hero-image" />
      </Box>

      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h1>Your Fitness Journey Starts Here</h1>
        <Button variant="outlined" fullWidth onClick={logIn}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
