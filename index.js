const { log }  = require('./log')
const express = require("express");
const { categoriesStub } = require('./categories+stub')
const router = express.Router();
const path = require('path')

const appExpress = express();

let value = categoriesStub()
let publicPath = path.join(__dirname, 'public')

appExpress.get("/allCategories", async (req, res) => {
  try {
    res.send(value)
  } catch (error) {
    return res.status(500).send("Server error")
  }
})

appExpress.get("/privacy_policy", async (req, res) => {
  try {
    res.sendFile(`${publicPath}/privacy.html`)
  } catch (error) {
    return res.status(500).send("Server error")
  }
})

const port = process.env.PORT || 9001;
appExpress.listen(port, () => console.log(`Listening to port ${port}`));
