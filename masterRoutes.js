const styles = require("./server/styles/styles"),
  beers = require("./server/beers/beersRoute"),
  breweries = require("./server/breweries/breweryRoutes"),
  proxy = require("./server/proxy/proxyRoutes");

module.exports = app => {
  styles(app);
  beers(app);
  breweries(app);
  proxy(app);
};
