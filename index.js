// import the server package
const express = require('express');

//  make an instance of the server that we can customise and run

const app = express();



// Set port and host
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

// Ports can only be a integer between 1001 - 65536 

// GET localhost:3000/
// app.get (route path, callbback function)
app.get("/", (request, response) => {
    response.send("Hello World"); // send a string back to client as a response
})


// configure the server -- happens all above this line  --------

// Active the server -- happens all below this line ------


app.listen(PORT, HOST, () => {
	console.log("Server is running on port: " + PORT);
});