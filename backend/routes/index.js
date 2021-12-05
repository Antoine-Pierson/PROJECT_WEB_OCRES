var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});

module.exports = router;

/*const express = require("express")
const mongoose = require("mongoose")
const routes = require("./Users")

mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
	*/