const breweryCtrl = require("./breweryCtrl.js")

module.exports = app => {
	app.get("/breweries", breweryCtrl.getBreweriesByName)
}
