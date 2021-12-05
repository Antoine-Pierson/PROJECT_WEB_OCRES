const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId:  process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })

    spotifyApi.refreshAccessToken().then(
        (data) => {
          res.json({
              accessToken: data.body.accessToken,
              expiresIn: data.body.expiresIn,
          })
        }).catch(() => {
            res.sendStatus(400)
        })
})

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId:  process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
      res.sendStatus(400)
    })
})

app.listen(3001)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;

/*
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/users.js")

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