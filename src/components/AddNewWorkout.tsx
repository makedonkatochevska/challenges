import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Intensity, Workout, WorkoutTypeName } from "../types";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function AddNewWorkout() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [selectedExerciseType, setSelectedExerciseType] =
    useState<WorkoutTypeName | null>();
  const [selectedDuration, setSelectedDuration] = useState("0");
  const [selectedIntensity, setSelectedIntensity] = useState<Intensity>(
    Intensity.Low
  );

  const [exerciseType, setExerciseType] = useState<{ name: WorkoutTypeName }[]>(
    []
  );

  const intensityOptions = Object.values(Intensity);

  if (!user) throw new Error("User must be logged in to access this page");

  useEffect(() => {
    const q = query(collection(db, "workoutTypes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const exType: { name: WorkoutTypeName }[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        exType.push({ name: data.name });
      });

      setExerciseType(exType);
    });

    return () => unsubscribe();
  }, []);

  const resetForm = () => {
    setSelectedExerciseType(null);
    setSelectedDuration("0");
    setSelectedIntensity(Intensity.Low);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedExerciseType || !selectedIntensity || !selectedDuration) {
      return;
    }

    const newWorkout: Workout = {
      id: uuidv4(),
      exerciseType: selectedExerciseType,
      duration: +selectedDuration,
      intensity: selectedIntensity,
      userId: user.id,
      date: new Date().toISOString(),
    };

    await setDoc(doc(db, "workouts", newWorkout.id), newWorkout);

    //console.log("NEW WORKOUT", newWorkout);
    resetForm();
    navigate(ROUTES.HOME);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "30%",
          mx: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Autocomplete
          disablePortal
          options={exerciseType}
          getOptionLabel={(option) => option.name}
          value={
            selectedExerciseType
              ? exerciseType.find((ex) => ex.name === selectedExerciseType) ||
                null
              : null
          }
          onChange={(_, newValue) => {
            if (newValue) setSelectedExerciseType(newValue.name);
            else setSelectedExerciseType(undefined);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Exercise Type"
              name="exerciseType"
              required
            />
          )}
        />

        <TextField
          label="Duration"
          variant="outlined"
          name="duration"
          type="number"
          value={selectedDuration}
          onChange={(e) => {
            const value = e.target.value;
            if (+value >= 0) setSelectedDuration(value);
          }}
          inputProps={{ min: 0 }}
          required
        />

        <Autocomplete
          disablePortal
          options={intensityOptions}
          getOptionLabel={(option) => option}
          value={selectedIntensity}
          onChange={(_, newValue) => {
            if (newValue) setSelectedIntensity(newValue as Intensity);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Intensity"
              name="intensity"
              required
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={
            !selectedExerciseType ||
            +selectedDuration === 0 ||
            !selectedIntensity
          }
        >
          Add Workout
        </Button>
      </Box>
    </Box>
  );
}
