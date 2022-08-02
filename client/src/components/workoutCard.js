import React from "react";
import { Button, Card, CardContent, Typography, CardActions, IconButton, Tooltip } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import "./styles.css"

export default function WorkoutCard(props) {
    return (
    <Card className="workout-card">
        <div className="icon" style={{transform: 'scale(1, 1)',}}>
            {props.icon}
        </div>
        <div>
            <Typography variant = "h4"> {props.title} </Typography>
            <Typography variant = "body1"> {props.info}</Typography>
        </div>
        <div className="workout-button-area">
            <Tooltip title="Delete">
                <IconButton 
                aira-label="delete"
                onClick={() => alert('delete')}><ClearIcon
                    className="clear-icon"/></IconButton>
            </Tooltip>
        </div>
    </Card>
    )
}