const WorkoutComponent = ({workout}) => {
    return (
        <div className="workout-component"> 
            <h1> Program names: {workout.title}</h1>
            <p> <strong>Reps:</strong>  {workout.reps}</p>
            <p> <strong>Load:</strong> {workout.load}</p>
            <p> <strong>Set:</strong> {workout.set}</p>
            <p> <strong>Date:</strong> {workout.createdAt}</p>
        </div>
    )
}
export default WorkoutComponent