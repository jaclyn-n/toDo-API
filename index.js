import express from 'express';

// create an express app
const app = express();

// define route 
app.get("/hello", function (request, respond, next) {
  console.log(request.headers);
  respond.json("you vsited the hello endpoint");
});

app.get("/goodbye", function (request, respond, next) {
    console.log(request.query);
    respond.json("same to you");
});

// listen for incoming resquests
app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
