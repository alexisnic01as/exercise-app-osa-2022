import { Button, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions,
    TextField } from "@mui/material";
import React, { useState } from "react";

export default function WorkoutDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleClickOpen = () => {
        setDialogOpen(true);
    }

    const handleClose = () => {
        setDialogOpen(false);
    }

    const submitWorkout = () => {
        
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Add a new workout!
            </Button>
            <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle>Submit a workout!</DialogTitle>    
                <DialogContent>
                    <DialogContentText>
                        Share a workout for other people to see! Input the workout name and details then submit.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="workout-name"
                        label="Workout Name"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="workout-details"
                        label="Workout Details"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={submitWorkout}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}