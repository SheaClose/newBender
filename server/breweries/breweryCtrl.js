const brewdb = require("../../brewDb.js")

module.exports = {
	getBreweriesByName(req, res) {
		brewdb.search.breweries({ q: req.query.breweryName }, (err, brewery) => {
			if (err) {
				return res.json(err)
			}
			return res.status(200).json(brewery)
		});
	}
}
