//jshint esversion:6

const express = require('express');

const app = express();
//listen to server point 3000
app.listen(3000, function(){
  console.log("Server started on port 3000")
});
