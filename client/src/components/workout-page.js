import React, { useState } from "react";
import WorkoutCard from "./workout-card";

export default function WorkoutPage() {
    return <div>
        Browse our selection of exercises with recommended workouts and tap the plus to add them to “My Workouts.”
        <div style={{display: "flex", justifyContent: "center"}}>
            <WorkoutCard/>
        </div>
    </div>
}