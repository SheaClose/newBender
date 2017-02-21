const styles = require("./server/styles/styles.js")
		, beers = require("./server/beers/beersRoute.js")
		, breweries = require("./server/breweries/breweryRoutes.js")

module.exports = app => {
		styles(app)
	, beers(app)
	, breweries(app)
}
