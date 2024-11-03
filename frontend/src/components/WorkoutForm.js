import React, { useState } from 'react';
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
    const {workout, dispatch} = useWorkoutContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [set, setSet] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, reps, load, set, createdAt: new Date().toISOString() };
        const response = await fetch('/api/workouts', 
            { 
                method: 'POST', 
                body: JSON.stringify(workout), 
                headers: { 'Content-Type': 'application/json' } 
            }
        );
        if (response.ok) {
            const json = await response.json(); // Correctly parse the response
            setTitle('');
            setReps('');
            setLoad('');
            setSet('');
            setError(null); 
            dispatch({ type: "CREATE_WORKOUT", payload: json }); // Use the parsed JSON
        } else {
            const json = await response.json();
            if (json && json.error) {
                setError(json.error);
            }
        }
    };

    return (
        <form className='create' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="reps">Reps</label>
                <input
                    type="number"
                    id="reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="load">Load</label>
                <input
                    type="number"
                    id="load"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="set">Set</label>
                <input
                    type="number"
                    id="set"
                    value={set}
                    onChange={(e) => setSet(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;