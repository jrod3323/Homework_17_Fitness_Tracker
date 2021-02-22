const db = require("../models")


module.exports = function (app) {

    app.get("/api/workouts/", (req,res) =>{
        db.Workout.find({}, (error,data)=> {
            if (error) {
                res.send(error);
            } else {
                res.json(data)
            }
        });
       
        
    })

    app.post("/api/workouts/", async (req,res) => {
        db.Workout.create({}, (error,data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data)
            }
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id, 
            { 
                $push: { 
                    exercises: req.body
                }
            },(err,data)=>{
                if(err) return err;
                else res.json(data);
            })
    });

    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({}, (error,data)=> {
            if (error) {
                res.send(error);
            } else {
                res.json(data)
            }
        })
    })
}