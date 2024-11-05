import { useWorkoutContext } from "../hooks/useWorkoutContext"

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutContext()

    const deleteWorkout = async (id) => {
        const response = await fetch(`/api/workouts/${id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Set: </strong>{workout.set}</p>
            <p>{workout.createdAt}</p>
            <span onClick={() => deleteWorkout(workout._id)} className="material-symbols-outlined">delete</span>
            <span onClick={() => {}} className="material-symbols-outlined">edit</span>
        </div>
    )
}
export default WorkoutDetails