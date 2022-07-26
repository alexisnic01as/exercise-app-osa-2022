import React from "react";
import WorkoutDialog from "../components/submitWorkoutDialog";
import WorkoutCard from "../components/workoutCard";

// eventually make client call to retrieve workout items in database
const workouts = []

export default function BrowsePage() {
    return (
        <div>
            <body>
            Browse our selection of exercises with recommended workouts and tap the plus to add them to “My Workouts.
            </body>

            {workouts.map(o => <WorkoutCard icon = {o.icon} title = {o.title} info = {o.info}/>)}
            
            <WorkoutDialog/>
        </div>
    )
}