const express = require("express")
      , {json} = require("body-parser")
      , cors = require("cors")
      , serverConfig = require("./serverConfig.js")
      , port = serverConfig.port || 3000
      , app = express()
      , session = require('express-session')
			, BreweryDb = require('brewerydb-node')
			, brewdb = new BreweryDb('e6dd4ca543ecb9e65e170def16b95035')

app.use(session({ secret: serverConfig.secret, resave: true, saveUninitialized:true } ) );
app.use("/", express.static(__dirname));
app.use(json());
app.use(cors());
app.get("/styles", function(req, res){
	brewdb.style.all((err, style)=>{
		res.status(200).json(style);
	})
})

app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
