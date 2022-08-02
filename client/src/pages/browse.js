import "../components/styles.css"
import { NavLink } from "react-router-dom";
import NewWorkout from "../components/newWorkout.js";
import { useEffect, useState } from "react"
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WorkoutCard from "../components/workoutCard";

// make database call to retrieve all workouts; it should happen on page load

export default function Browse() {

    const [workouts, setWorkouts] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getWorkouts() {
        const response = await fetch(`http://localhost:5000/workout`);

        if (!response.ok) {
            const message = `An error occured: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const retrievedWorkouts = await response.json();
        console.log(retrievedWorkouts);
        setWorkouts(retrievedWorkouts);
        }

        getWorkouts();
    return; 
    }, []);

    return (
        <div>
            <nav className="nav">
                <ul className="main-nav">
                    <li className="page">
                        <NavLink className="current-tab" to="/browse">Browse</NavLink>
                    </li>
                    <li className="page">
                        <NavLink to="/my-workouts">My Workouts</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="card-area">
                {workouts.filter(workout => workout.workoutName && workout.workoutAmount)
                    .map(o => 
                    <WorkoutCard
                    icon = {<DirectionsRunIcon sx = {{fontSize: '10vw'}}/>}
                    title = {o.workoutName}
                    info = {o.workoutAmount}
                    />
                )}
            </div>
            <NewWorkout/>
        </div>
    )
}