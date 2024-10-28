require('dotenv').config()
const express = require("express");
const app = express();

//Middleware
app.use(
    (request,response,next) => {
        console.log(request.path, request.method);
        next();
    }
)

//Routes
app.get("/", (request , respone) => {
    respone.json({mssg: 'hello world'});  
})

// Listening for request
app.listen(process.env.PORT, ( ) => {
    console.log(`server running on port ${process.env.PORT}`);
})
