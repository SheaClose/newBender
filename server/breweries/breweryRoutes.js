const breweryCtrl = require("./breweryCtrl.js")

module.exports = app => {
	app.get("/breweries/:lng/:lat", breweryCtrl.getBreweriesByLocation)
	app.get("/breweries", breweryCtrl.getBreweriesByName)

}
