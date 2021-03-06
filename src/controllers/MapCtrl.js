function mapCtrl($scope, $state, mapFactory, $location, uiGmapGoogleMapApi) {
  $scope.clicked = false;
  if (!$state.params.lat && !$state.params.lng) {
    mapFactory.searchByLocation().then(response => {
      $location.path(`map/${response.lat}/${response.lng}`);
    });
  }

  $scope.localbreweries;
  $scope.markerList = [];
  $scope.map = {
    center: {
      latitude: $state.params.lat,
      longitude: $state.params.lng
    },
    zoom: 12
  };
  $scope.homeMarker = {
    coords: {
      latitude: $state.params.lat,
      longitude: $state.params.lng
    },
    id: 99,
    options: { opacity: 0.5 }
  };
  $scope.goToBrewery = function(b) {
    $state.go(`searchBreweries/${b}`);
  };
  uiGmapGoogleMapApi.then(function(maps) {
    mapFactory.getBreweries($scope.map.center).then(res => {
      var response = JSON.parse(res.data);
      $scope.localbreweries = response.data;

      $scope.localbreweries.forEach((c, i, a) => {
        var breweryObj = {
          coords: {
            latitude: c.latitude,
            longitude: c.longitude
          },
          id: i,
          message:
            "Brewery Name: " + c.brewery.name + " | Distance: " + c.distance,
          distance: c.distance,
          name: c.brewery.name,
          bId: c.breweryId
        };
        $scope.markerList.push(breweryObj);
      });
      $scope.mapRefresh = true;
    });
  });
}

export default [
  "$scope",
  "$state",
  "mapFactory",
  "$location",
  "uiGmapGoogleMapApi",
  mapCtrl
];
