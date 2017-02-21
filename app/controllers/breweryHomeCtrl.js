angular.module("app")
.controller("breweryHomeCtrl", function($scope, $state, beerFactory){
	var breweryName = $state.params.brewery
	beerFactory.getBreweriesByName(breweryName).then(response => {
		console.log(response);
		$scope.breweryByName = response;
	})
})
