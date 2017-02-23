const beersCtrl = require("./beersCtrl.js")

module.exports = app => {
	app.get("/beers", beersCtrl.getBeersByBrewery)
}
