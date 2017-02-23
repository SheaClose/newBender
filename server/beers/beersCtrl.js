const brewdb = require("../../brewDb.js")
		, request = require("request")
		, serverConfig = require("../../serverConfig.js")

module.exports = {
	getBeersByBrewery (req, res){
		request(`https://api.brewerydb.com/v2/brewery/${req.query.breweryId}/beers?key=${serverConfig.brewDbKey}`, function (error, beers) {
		  if (!error && beers.statusCode == 200) {
				res.status(200).json(JSON.parse(beers.body).data)
		  }
		})

	}
}
