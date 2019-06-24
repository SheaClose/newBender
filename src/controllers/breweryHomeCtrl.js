angular.module("app")
.controller("breweryHomeCtrl", function($scope, $state, beerFactory){
	$scope.truncate = "truncate"
	$scope.limiter = 35
	var breweryName = $state.params.brewery
	beerFactory.getBreweriesByName(breweryName).then(response => {
		$scope.breweryByName = response;
		beerFactory.getBeersByBrewery($scope.breweryByName.id).then(beers => {
			$scope.beersFromBrewery = beers.data
		})
	})

})
