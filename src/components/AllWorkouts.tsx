import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import WorkoutItem from "./WorkoutItem";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Workout } from "../types";

export default function AllWorkouts() {
  const [allWorkouts, setAllWorkouts] = useState<Workout[]>([]);

  const { user } = useAuthContext();
  //console.log("LOGGED USER", user);

  const fetchWorkouts = async () => {
    const q = query(collection(db, "workouts"));
    const querySnapshot = await getDocs(q);
    const workouts: Workout[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      //console.log("DATA", data);

      const workout: Workout = {
        id: doc.id,
        exerciseType: data.exerciseType,
        duration: data.duration,
        intensity: data.intensity,
        userId: data.userId,
        date: data.date,
      };

      workouts.unshift(workout);
    });
    setAllWorkouts(workouts);
    //console.log("WORKOUTS", workouts);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  if (!user) return null;

  const userWorkouts = allWorkouts.filter(
    (workout) => workout.userId === user.id
  );

  return (
    <div>
      {userWorkouts.length === 0 && (
        <p>No workouts available. Add your first workout!</p>
      )}
      {userWorkouts &&
        userWorkouts.map((workout, index) => (
          <WorkoutItem
            key={workout.id}
            name={workout.exerciseType}
            duration={workout.duration}
            intensity={workout.intensity}
            borderBottom={
              index === userWorkouts.length - 1
                ? "3px solid black"
                : "1px solid lightgray"
            }
          />
        ))}
    </div>
  );
}
