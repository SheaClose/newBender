function beerFactory($http) {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://api.sheaclose.com"
      : "http://localhost:3000";
  return {
    getBeerStyles: function() {
      return $http.get(`${BASEURL}/bender/styles`);
    },
    getBreweriesByName: function(breweryName) {
      return $http
        .get(`${BASEURL}/bender/breweries?breweryName=${breweryName}`)
        .then(response => {
          return response.data[0];
        });
    },
    getBeersByBrewery: function(breweryId) {
      return $http.get(`${BASEURL}/bender/beers?breweryId=${breweryId}`);
    }
  };
}

export default ["$http", beerFactory];
