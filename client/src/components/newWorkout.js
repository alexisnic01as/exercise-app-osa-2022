import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions,
    TextField, FormControl, Radio, FormLabel, RadioGroup, FormControlLabel } from "@mui/material";


export default function NewWorkout() {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [workoutType, setWorkoutType] = useState('Time-based');
    const [workoutName, setWorkoutName] = useState('');
    const [workoutAmount, setWorkoutAmount] = useState('');

    const handleRadioChange = (event) => {
        setWorkoutType(event.target.value);
    };
    
    const handleClick = () => {
        setDialogOpen(true);
    }

    const handleClose = () => {
        setDialogOpen(false);
    }

    async function handleFormSubmit() {
        console.log(workoutName)
        console.log(workoutAmount)

        const data = {name: workoutName, amount: workoutAmount};

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
    }


    return (
        <div>
            <Button variant="contained" onClick = {handleClick}>Add a new workout!</Button>
            <Dialog open = {dialogOpen} onClose={handleClose}>
                <DialogTitle>Create a new workout!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Share a workout for other people to see! Input the workout name and details then submit.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Workout Name"
                        fullWidth
                        variant="standard"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                    />
                    <body><br></br></body>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Workout Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={workoutType}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="Amount of Time" control={<Radio />} label="Time-based" />
                            <FormControlLabel value="Number of Repetitions" control={<Radio />} label="Rep-based" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={workoutType}
                        fullWidth
                        variant="standard"
                        value={workoutAmount}
                        onChange={(e) => setWorkoutAmount(e.target.value)}
                    />
                </DialogContent>
                <Button onClick = {handleFormSubmit}> Submit Workout</Button>
            </Dialog>
        </div>
    )

}
