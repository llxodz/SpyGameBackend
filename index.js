const { log }  = require('./log')
const express = require("express");
const Category = require('./models/category')
const Location = require('./models/location')

const appExpress = express();

var value = [
  new Category(0, "В доме", [
    new Location("some", "sadasdassasdasd")
  ])
];

appExpress.get("/allCategories", function(req, res) {
  res.send(value)
})

appExpress.listen(3000, function(){
  log("server is running on port 3000");
})
