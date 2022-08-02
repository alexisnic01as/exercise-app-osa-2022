import React, { useState } from "react";
import { Card, IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import "./styles.css"

const handleClick = () => {
    localStorage.setItem("my-workouts")
}

export default function WorkoutCard(props) {
    const [myWorkouts, setMyWorkouts] = useState([]);

    return (
    <Card className="workout-card">
            {props.icon}
        <div className = "workout-text-container">
            <h5 className = "workout-title"> {props.title} </h5>
            <body className = "workout-info"> {props.info}</body>
        </div>
        <div className="workout-button-area">
            <Tooltip title="Delete">
                <IconButton 
                    aira-label="delete"
                    onClick={handleClick}>
                    <ClearIcon className="clear-icon" sx = {{fontSize: "3vw"}}/>
                </IconButton>
            </Tooltip>
        </div>
    </Card>
    )
}