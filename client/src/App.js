import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";

import WorkoutPage from "./pages/workoutPage";
import Browse from "./pages/browsePage";

const App = () => {
  return (
    <div>

      <div >
      <Routes>
        <Route exact path="/" element={<Browse />} />
        <Route path="/my-workouts" element={<WorkoutPage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
