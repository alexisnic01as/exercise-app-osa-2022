import React from "react";
import { Card, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./styles.css"

export default function WorkoutCard(props) {
    const unparsedWorkoutState = localStorage.getItem(JSON.stringify(props.id))
    const workoutState = unparsedWorkoutState ? JSON.parse(unparsedWorkoutState) : false


    const handleAdd = () => {
        const workoutCard = {"workoutId": props.id, "workoutTitle": props.title, "workoutInfo": props.info};

        const storage = JSON.parse(localStorage.getItem("my-workouts"))

        if (storage == null) {
            localStorage.setItem("my-workouts", JSON.stringify([workoutCard]))
            localStorage.setItem(JSON.stringify(props.id), JSON.stringify(true))
        } else {
            // check if workout card exists in storage
            if (storage.find(x => x.workoutId === props.id)) {
                alert("wee woo")
            } else {
                storage.push(workoutCard)
                localStorage.setItem("my-workouts", JSON.stringify(storage))
                localStorage.setItem(JSON.stringify(props.id), JSON.stringify(true))
            }
        }
    }

    return (
    <Card className="workout-card">
            {props.icon}
        <div className = "workout-text-container">
            <h5 className = "workout-title"> {props.title} </h5>
            <p className = "workout-info"> {props.info}</p>
        </div>
        <div className = "workout-button-area">
            {workoutState ? 
            <p className="already-in-myworkouts">Inside My Workouts</p> :

            <IconButton 
                aira-label="delete"
                onClick={handleAdd}>
                <AddIcon className = "add-icon" sx = {{fontSize: "3vw"}}/>
            </IconButton>
            }
        </div>
    </Card>
    )
}