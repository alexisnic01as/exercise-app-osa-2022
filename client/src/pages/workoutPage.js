import React from "react";
import WorkoutCard from "../components/workoutCard.js";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import "../components/styles.css"

import { NavLink } from "react-router-dom";

const workouts = [
    {icon: <DirectionsRunIcon/>, title: "Running in Place", info: "10 minutes"},
    {icon: <DirectionsRunIcon/>, title: "Jumping Jacks", info: "5 minutes"},
    {icon: <DirectionsRunIcon/>, title: "Pushups", info: "25x"},
    {icon: <DirectionsRunIcon/>, title: "Pushups", info: "25x"},
    {icon: <DirectionsRunIcon/>, title: "Pushups", info: "25x"},
    {icon: <DirectionsRunIcon/>, title: "Pushups", info: "25x"},
    {icon: <DirectionsRunIcon/>, title: "Pushups", info: "25x"},
    {icon: <DirectionsRunIcon/>, title: "Pushups", info: "25x"},
]

export default function WorkoutPage() {
    return (
        <div className = "workout-container">
            <nav className="nav">
                <ul className="main-nav">
                    <li className="page">
                        <NavLink to="/browse">Browse</NavLink>
                    </li>
                    <li className="page">
                        <NavLink className="current-tab" to="/my-workouts">My Workouts</NavLink>
                    </li>
                </ul>
            </nav>
            Remove exercises from 'My Workouts' at any time, and return to the main page to browse new exercises.
            <div className="card-area">
                {workouts.map(o => 
                    <WorkoutCard
                    icon = {o.icon}
                    title = {o.title}
                    info = {o.info}
                    />
                )}
            </div>
        </div>
    )

}