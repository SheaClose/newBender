const brewdb = require("../../brewDb.js")
		, request = require("request")
		, serverConfig = require("../../serverConfig.js")

module.exports = {
	getBreweriesByName(req, res, next) {
		if (req.query.breweryName) {
			brewdb.search.breweries({ q: req.query.breweryName }, (err, brewery) => {
				if (err) {
					return res.json(err)
				}
				return res.status(200).json(brewery)
			});
		}
		if (req.query.lng){
			// console.log(req.query.lng)
			request(`https://api.brewerydb.com/v2/search/geo/point?lat=${req.query.lat}&lng=${req.query.lng}&radius=50&key=${serverConfig.brewDbKey}`, function(err, breweries, body){
				if (err) {
					return res.status(200).json(err)
				}
				return res.status(200).json(JSON.parse(body).data)
			})
		}
	}
	// ,
	// getBreweriesByLocation(req,res){
	//
	// }
}
