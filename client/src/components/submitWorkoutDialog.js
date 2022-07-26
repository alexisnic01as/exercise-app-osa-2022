import { Button, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions,
    TextField } from "@mui/material";
import React, { useState } from "react";
import { useMutation, gql } from '@apollo/client';

export default function WorkoutDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [workoutTitleInForm, setWorkoutTitleInForm] = useState("");
    const [workoutDetailsInForm, setWorkoutDetailsInForm] = useState("");

    const CREATE_WORKOUT = gql`
    mutation CreateWorkout($workoutTitle: String!, $workoutDetails: String!) {
        createWorkout(workoutTitle: $workoutTitle, workoutDetails: $workoutDetails) {
            id
            workoutTitle
            workoutDetails
        }
    }
    `

    const [createWorkout] = useMutation(CREATE_WORKOUT);

    const handleOpen = () => {
        setDialogOpen(true);
    }

    const handleClose = () => {
        setDialogOpen(false);
    }

    const resetForm = () => {
        setWorkoutDetailsInForm("");
        setWorkoutTitleInForm("");
    }

    async function submitWorkout (e) {

        e.preventDefault();
        console.log("submitted")

        console.log(workoutTitleInForm)
        console.log(workoutDetailsInForm)

        const data = {title: workoutTitleInForm, details: workoutDetailsInForm}

        console.log(data)
        console.log(JSON.stringify(data))

        await fetch("http://localhost:5000/workout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .catch(error => {
            window.alert(error);
            return;
        });

        resetForm();
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                Add a new workout!
            </Button>
            <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle>Submit a workout!</DialogTitle>    
                <DialogContent>
                    <DialogContentText>
                        Share a workout for other people to see! Input the workout name and details then submit.
                    </DialogContentText>
                    <form id="createForm" onSubmit={submitWorkout}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="workout-name"
                            label="Workout Name"
                            fullWidth
                            variant="standard"
                            value={workoutTitleInForm}
                            onChange={(e) => setWorkoutTitleInForm(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="workout-details"
                            label="Workout Details"
                            fullWidth
                            variant="standard"
                            value={workoutDetailsInForm}
                            onChange={(e) => setWorkoutDetailsInForm(e.target.value)}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" form="createForm">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}