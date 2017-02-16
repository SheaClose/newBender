const BreweryDb = require('brewerydb-node')
		, brewdb = new BreweryDb('e6dd4ca543ecb9e65e170def16b95035')

module.exports = app => {
	app.get("/styles", function(req, res){
		brewdb.style.all((err, style)=>{
			res.status(200).json(style);
		})
	})
}
