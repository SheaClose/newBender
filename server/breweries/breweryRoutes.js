const breweryCtrl = require("./breweryCtrl.js")

module.exports = app => {
	app.get("/breweries", breweryCtrl.getBreweriesByName)
	app.get("/breweries/:lng/:lat", breweryCtrl.getBreweriesByLocation)
}
