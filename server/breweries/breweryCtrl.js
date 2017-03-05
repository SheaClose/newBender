const brewdb = require("../../brewDb.js")
		, request = require("request")
		, serverConfig = require("../../serverConfig.js")

module.exports = {
	getBreweriesByName(req, res) {
		brewdb.search.breweries({ q: req.query.breweryName }, (err, brewery) => {
			if (err) {
				return res.json(err)
			}
			return res.status(200).json(brewery)
		});
	},
	getBreweriesByLocation(req,res){
		request(`https://api.brewerydb.com/v2/search/geo/point?lat=${req.params.lat}&lng=${req.params.lng}&radius=50&key=${serverConfig.brewDbKey}`, function(err, breweries, body){
			if (err) {
				return res.status(200).json(err)
			}
			return res.status(200).json(JSON.parse(body).data)
		})
	}
}
