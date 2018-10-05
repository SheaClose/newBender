const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  { secret, PORT } = require("./serverConfig.js"),
  port = PORT || 3000,
  app = express(),
  session = require("express-session"),
  masterRoutes = require("./masterRoutes.js");

app.use(
  session({
    secret: secret,
    resave: true,
    saveUninitialized: true
  })
);
app.use("/", express.static(__dirname));
app.use(json());
app.use(cors());

masterRoutes(app);

app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
