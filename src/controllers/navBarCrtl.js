function navBarCtrl($scope, $state, mapFactory, beerFactory) {
  /*boolean value to determine if the hamburger menu is selected*/
  $scope.click = false;
  /*this function is run when "browse by area"to determine if the
	browser is on the mapview. if it is, it reassigns the $scope.map
	to the current geoLocation, regardless of state params*/
  $scope.whereAmI = function() {
    if ($state.current.name === "mapView") {
      mapFactory.searchByLocation().then(response => {
        $scope.map.center.latitude = response.lat;
        $scope.map.center.longitude = response.lng;
      });
    }
  };
  $scope.navBlurred = () => {
    $scope.click = false;
  };
  /**/
  $scope.navFocused = function(bool) {
    $scope.click = true;
  };
  $scope.keyDown = function(e) {
    var numberBoolean = Number(e);
    if (e.length !== 5 || !numberBoolean) {
      alert("Please enter a valid zipcode.");
      $scope.zipcode = "";
    } else {
      mapFactory.searchByZipcode(e).then(response => {
        $state.go("mapView", { lat: response.lat, lng: response.lng });
      });
    }
  };
  $scope.searchBreweries = breweryName => {
    $state.go("searchBreweries", { brewery: breweryName });
    $scope.brewery = "";
  };
}

export default ["$scope", "$state", "mapFactory", "beerFactory", navBarCtrl];
