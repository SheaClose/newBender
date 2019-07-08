function breweryHomeCtrl($scope, $state, beerFactory) {
  Object.assign($scope, {
    truncate: "truncate",
    limiter: 35
  });
  var breweryName = $state.params.brewery;
  beerFactory
    .getBreweriesByName(breweryName)
    .then(response => {
      if (response) {
        $scope.breweryByName = response;
        beerFactory
          .getBeersByBrewery($scope.breweryByName.id)
          .then(({ data: beers }) => {
            console.log("beers: ", beers[0]);
            $scope.beersFromBrewery = beers;
          });
      }
    })
    .catch(console.warn);
}

export default ["$scope", "$state", "beerFactory", breweryHomeCtrl];
