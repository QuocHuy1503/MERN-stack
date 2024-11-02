import React, { useState } from 'react';

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [set, setSet] = useState('');
  const [error, setError] = useState(null);
  const [createdAt, setCreatedAt] = useState(new Date().toISOString()); // Define createdAt here

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load, set, createdAt };
    const response = await fetch('/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    });
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      setTitle('');
      setReps('');
      setLoad('');
      setSet('');
    }

    if (!response.ok) {
      setError(json.error);
    }
  };
    return (
        <>
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
        </>
    )
}

export default WorkoutForm