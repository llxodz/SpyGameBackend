const { log }  = require('./log')
const express = require("express");

const appExpress = express();

const value = {
  hello: "world!"
}

appExpress.get("/allCategories", function(req, res) {
  res.send(value)
})

appExpress.listen(3000, function(){
  log("server is running on port 3000");
})
