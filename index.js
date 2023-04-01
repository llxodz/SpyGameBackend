const { log }  = require('./log')
const express = require("express");
const { categoriesStub } = require('./categories+stub')
const router = express.Router();

const appExpress = express();

let value = categoriesStub()

const allCategories = router.get("/", async (req, res) => {
  try {
    res.send(value)
  } catch (error) {
    return res.status(500).send("Server error")
  }
})

appExpress.use("/allCategories", allCategories)

const port = process.env.PORT || 9001;
appExpress.listen(port, () => console.log(`Listening to port ${port}`));
