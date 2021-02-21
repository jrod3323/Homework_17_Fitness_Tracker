const express = require("express");
const db = require("../models")


module.exports = function (app) {

    app.get("/api/workouts/:id", async (req,res) => {
        try {
            const workouts = await db.Workout.find();
            res.json(workouts);
        }
        catch (err) {
            res.status(500).json({ message: err.message})
        }
    })

    

}