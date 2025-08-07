import { Box, Typography } from "@mui/material";
interface WorkoutItemProps {
  name: string;
  duration: number;
  intensity: string;
  borderBottom: string;
}

export default function WorkoutItem({
  name,
  duration,
  intensity,
  borderBottom,
}: WorkoutItemProps) {
  return (
    <div>
      <Box
        sx={{
          py: 2,
          px: 2,
          borderBottom,
        }}
      >
        <Typography variant="h6" component="h3" sx={{ fontFamily: "inherit" }}>
          {name}
        </Typography>
        <Typography>Duration: {duration}</Typography>
        <Typography>Intensity: {intensity}</Typography>
      </Box>
    </div>
  );
}
