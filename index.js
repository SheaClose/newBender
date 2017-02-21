const express = require("express")
      , {json} = require("body-parser")
      , cors = require("cors")
      , serverConfig = require("./serverConfig.js")
      , port = serverConfig.port || 3000
      , app = express()
      , session = require('express-session')
			, masterRoutes = require("./masterRoutes.js")

app.use(session({ secret: serverConfig.secret, resave: true, saveUninitialized:true } ) );
app.use("/", express.static(__dirname));
app.use(json());
app.use(cors());
masterRoutes(app)

app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
