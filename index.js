// import the server package
const express = require('express');

//  make an instance of the server that we can customise and run

const app = express();

// GET localhost:3000/
// app.get (route path, callbback function)
app.get("/", (request, response) => {
    response.send("Hello World"); // send a string back to client as a response
})


// configure the server -- happens all above this line  --------

// Active the server -- happens all below this line ------


app.listen(3000, () => {
    console.log("Server is running on port : " + 3000)
})