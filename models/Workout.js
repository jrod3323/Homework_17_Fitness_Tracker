const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                trim : true,
                required: "Exercise Type Is Required"
            },

            name: {
                type: String,
                trim: true,
                required: "Exercise Name Is Required"
            },

            distance: {
                type: Number, 
            },

            duration: {
                type: Number,
                required: "Workout Duration Is Required"
            },

            weight: {
                type: Number,
            },

            sets: {
                type: Number,
            },

            reps: {
                type: Number,
            }
        }
    ]
}

// {
//     toJSON: {
//         virtuals: true
//     }
// }

// WorkoutSchema.virtual("aggregate").get(

// )

)

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
