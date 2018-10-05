const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  serverConfig = require("./serverConfig.js"),
  port = serverConfig.port || 3000,
  app = express(),
  session = require("express-session"),
  masterRoutes = require("./masterRoutes.js"),
  axios = require("axios");
app.use(
  session({
    secret: serverConfig.secret,
    resave: true,
    saveUninitialized: true
  })
);
app.use("/", express.static(__dirname));
app.use(json());
app.use(cors());
app.post("/api/proxy", (req, res) => {
  let { method, data, url } = req.body;
  switch (method) {
    case "GET":
      axios.get(url).then(data => {
        res
          .status(200)
          .json(data)
          .catch(err => res.status(500).json(err));
      });
    case "PUT":
      axios.put(url, data).then(data => {
        res
          .status(200)
          .json(data)
          .catch(err => res.status(500).json(err));
      });
    case "POST":
      axios.post(url, data).then(data => {
        res
          .status(200)
          .json(data)
          .catch(err => res.status(500).json(err));
      });
    case "DELETE":
      axios.delete(url, data).then(data => {
        res
          .status(200)
          .json(data)
          .catch(err => res.status(500).json(err));
      });
  }
});
masterRoutes(app);

app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
