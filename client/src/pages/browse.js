import "../components/styles.css"
import { NavLink } from "react-router-dom";

export default function Browse() {
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
                
            </div>
        </div>
    )
}