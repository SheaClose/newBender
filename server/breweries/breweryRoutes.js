const breweryCtrl = require("./breweryCtrl.js")

module.exports = app => {
	app.get("/breweriesByLocation/:lng/:lat", breweryCtrl.getBreweriesByLocation)
	app.get("/breweries", breweryCtrl.getBreweriesByName)
}
