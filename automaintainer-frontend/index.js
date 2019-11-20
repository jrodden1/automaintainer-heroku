const express = require("express");
// Create App controller 
const app = express()

// Tell app controller to use the current directory for where to find files
app.use(express.static(__dirname));

// Sets up routing for when root path is accessed
app.get("/", function(req, resp){
   resp.sendFile("index.html");
})

// Add port for server to listen to
app.listen(3000, function(){
   console.log('listening on port: 3000');
})