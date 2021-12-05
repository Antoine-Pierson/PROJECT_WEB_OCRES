const express = require("express");
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
        redirectUri: 'http://localhost:3000',
        clientId: 'a15495da3c4f42c89a4a4560e54a3c19',
        clientSecret: 'baff21293c19434a95d8fa0f4d02778e',
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
      redirectUri: 'http://localhost:3000',
      clientId: 'a15495da3c4f42c89a4a4560e54a3c19',
      clientSecret: 'baff21293c19434a95d8fa0f4d02778e',
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
