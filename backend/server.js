require('dotenv').config()
const express = require("express");
const mongose = require("mongoose");
const app = express();
const workoutRoutes = require("./routes/workouts")


//Middleware
app.use(express.json());
app.use(
    (request,response,next) => {
        console.log(request.path, request.method);
        next();
    }
)

//Routes
app.use("/api/workouts", workoutRoutes);

//Connect to db
mongose.connect(process.env.MONGODB_URI)
    .then(() => {
        // Listening for request
        app.listen(process.env.PORT, ( ) => {
            console.log(`server running on port ${process.env.PORT}`);
        })        
    })
    .catch((error) => {
        console.log(error);
    })
