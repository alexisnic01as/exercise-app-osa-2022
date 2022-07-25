import React from "react";
import { Button, Card, Typography } from '@mui/material';
import "./styles.css"

export default function WorkoutCard(props) {
    return (
    <Card className="workout-card">
        {props.icon}
        <div>
            <Typography variant = "h4"> {props.title} </Typography>
            <Typography variant = "body1"> {props.info}</Typography>
        </div>
        <div className="workout-button-area">
            <Button> Remove from my workouts </Button>
        </div>
    </Card>
    )
}