const { log }  = require('./log')
const express = require("express");
const { categoriesStub } = require('./categories+stub')

const appExpress = express();

let value = categoriesStub()

appExpress.use("/allCategories", function(req, res) {
  res.send(value)
})

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
