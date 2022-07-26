const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const workoutRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

workoutRoutes.route("/workout").post((req, response) => {
    console.log("inside the router")
    console.log(req);
    let db_connect = dbo.getDb("exercise_app");
    let workoutObj = {
        workoutTitle: req.body.title,
        workoutDetails: req.body.details,
    };
    db_connect.collection("workouts").insertOne(workoutObj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
})

module.exports = workoutRoutes;