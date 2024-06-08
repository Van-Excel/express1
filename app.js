var http = require("node:http");
var express = require("express");
const path = require("path")



var app = express();

// configuring express to serve static files
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//configure views and template engine
// views are in a folder called views
app.set("views", path.resolve(__dirname, "views"));

// set template engine
app.set("view engine", "ejs");

// MIDDLEWARE

app.get("/", function(req, res){
    res.render("index", {"message": "Hello this is the homepage"});
});

app.get("/about", function(req, res){
    res.end("Welcome to the about page.");
});


app.use(function(req, res){
    res.statuscode = 404;
    res.end("Page not found");
});


http.createServer(app).listen(3000);