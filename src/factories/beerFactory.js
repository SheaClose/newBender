function beerFactory($http) {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://api.sheaclose.com"
      : "http://localhost:3000";
  return {
    getBeerStyles: function() {
      return $http.get(`${BASE_URL}/bender/styles`);
    },
    getBreweriesByName: function(breweryName) {
      return $http
        .get(`${BASE_URL}/bender/breweries?breweryName=${breweryName}`)
        .then(({ data }) => (data ? data[0] : null));
    },
    getBeersByBrewery: function(breweryId) {
      return $http.get(`${BASE_URL}/bender/beers?breweryId=${breweryId}`);
    }
  };
}

export default ["$http", beerFactory];
