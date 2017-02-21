const BreweryDb = require('brewerydb-node')
		, brewDbKey = require("./serverConfig.js").brewDbKey
		, brewdb = new BreweryDb(brewDbKey)

module.exports = brewdb;
