import React, { useState } from "react";
import Card from "@mui/material/Card";
import "./styles.css"
import { Button, CardActions, CardContent, Typography } from "@mui/material";


export default function WorkoutCard () {
    return (
    <Card class="workout-card">
        <CardContent>
            <Typography variant="h4"> Workout Title </Typography>
            <Typography variant="body1"> Workout Information </Typography>
            <CardActions>
                <Button>
                    Add to my workouts
                </Button>
            </CardActions>
        </CardContent>
    </Card>
    )
}