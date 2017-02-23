angular.module("app")
.factory("beerFactory", function($http){
	return {
		getBeerStyles() {
			return $http.get("/styles")
	  },
		getBreweriesByName(breweryName) {
				return $http.get(`/breweries?breweryName=${breweryName}`).then(response => {
					return response.data[0]
				})
		},
		getBeersByBrewery(breweryId) {
			return $http.get(`/beers?breweryId=${breweryId}`)
		}
	}
})
