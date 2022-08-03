import React from "react";
import WorkoutCard from "../components/workoutCard.js";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import "../components/styles.css"

import { NavLink } from "react-router-dom";

const unparsedWorkouts = localStorage.getItem("my-workouts")

const workouts = unparsedWorkouts ? JSON.parse(unparsedWorkouts) : []


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
            <div className = "text-area">
                <p>Remove exercises from 'My Workouts' at any time, and return to the main page to browse new exercises. </p>
            </div>
            <div className="card-area">
                {workouts.map(o => 
                    <WorkoutCard
                    icon = {<DirectionsRunIcon sx = {{fontSize: '10vw'}}/>}
                    title = {o.workoutTitle}
                    info = {o.workoutInfo}
                    id = {o.workoutId}
                    />
                )}
            </div>
        </div>
    )

}