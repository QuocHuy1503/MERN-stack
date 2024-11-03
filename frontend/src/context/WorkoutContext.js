import React, {useEffect, useReducer} from "react";

export const WorkoutContext = React.createContext();

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                ...state,
                workouts: action.payload,
            };
        case "CREATE_WORKOUT":
            return {
                ...state, 
                workout: [action.payload, ...state.workout],
            };
        case "DELETE_WORKOUT":
            return {
                workout: state.workout.filter(
                    (workout) => workout._id !== action.payload
                ),
        };
        case "UPDATE_WORKOUT":
            return {
                workout: state.workout.map((workout) =>
                    workout._id === action.payload._id ? action.payload : workout
                ),
        };
        default:
            return state;
    }
};

export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: [], 
        workout: [],
        error: null,
    });
    return (
        <WorkoutContext.Provider
            value={{...state, dispatch}}
        >
            {children}
        </WorkoutContext.Provider>
    );
};
