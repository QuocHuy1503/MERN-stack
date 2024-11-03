"use client"
import { useEffect , useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
const Home = () => {
    // const [workouts, setWorkouts] = useState([]);
    const {workouts, dispatch} = useWorkoutContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
          const res = await fetch("/api/workouts");
          const json = await res.json();
          if (res.ok) {
            // setWorkouts(json);
            dispatch({ type: "SET_WORKOUTS", payload: json });
          }
        };
        fetchWorkouts();
    }, [workouts, dispatch]);
    return (
        <div className="home">
          <div className="workouts">
            {workouts && workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
          </div>
          <div className="form">
            <WorkoutForm />
          </div>
        </div>
    );
}
export default Home;