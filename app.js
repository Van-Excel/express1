var http = require("node:http");
var express = require("express");


app = express();

// configuring express to serve static files
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function(req, res){
    res.end("Welcome to the homepage.");
});

app.get("/about", function(req, res){
    res.end("Welcome to the about page.");
});


app.use(function(req, res){
    res.statuscode = 404;
    res.end("Page not found");
});


http.createServer(app).listen(3000);