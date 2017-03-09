angular.module("app")
.factory("beerFactory", function($http){
	return {
		getBeerStyles: function () {
			return $http.get("/styles")
	  },
		getBreweriesByName: function (breweryName) {
				return $http.get(`/breweries?breweryName=${breweryName}`).then(response => {
					return response.data[0]
				})
		},
		getBeersByBrewery: function (breweryId) {
			return $http.get(`/beers?breweryId=${breweryId}`)
		}
	}
})
