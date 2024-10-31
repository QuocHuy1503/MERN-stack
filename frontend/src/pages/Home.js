"use client"
import { useEffect , useState } from "react";
import WorkoutComponent from "../components/WorkoutComponent";
const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
          const res = await fetch("/api/workouts");
          const json = await res.json();
          console.log(res); 
          if (res.ok) {
            setWorkouts(json);
          }
        };
        fetchWorkouts();
    }, []);
    return (
        <div className="home">
          <div className="workouts">
            {workouts && workouts.map((workout) => (
              <WorkoutComponent key={workout._id} workout={workout} />
            ))}
          </div>
        </div>
    );
}
export default Home;