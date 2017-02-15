angular.module("app", ['ui.router', 'uiGmapgoogle-maps'])
.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){
	uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyD48MJ_f0TCqUdP7VzwwEB_PZiz-dInePs	',
      v: '3.20',
      libraries: 'weather,geometry,visualization'
  })
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url: "/"
    , templateUrl: "./public/views/home.html"
  })
  .state("mapView", {
      url: "/map/:lat/:lng"
    , templateUrl: "./public/views/map.html"
		, controller: "mapCtrl"
  })
  .state("browseBeers", {
      url: "/browseBeers"
    , templateUrl: "./public/views/browseBeers.html"
    , controller: "beerListCtrl"
  })
  .state("browseBreweries", {
      url: "/browseBreweries"
    , templateUrl: "./public/views/browseBreweries.html"
  })
  .state("browseBeerStyles", {
      url: "/browseBeerStyles"
    , templateUrl: "./public/views/browseBeerStyles.html"
  })
  .state("brewery", {
      url: "/brewery/:bId"
    , templateUrl: "public/views/brewery.html"
    , controller: "breweryHomeCtrl"
  })
})
.directive("navBar", function () {
	return {
				templateUrl: "./public/views/navBar.html"
			, controller: function($scope, $state, mapFactory, beerFactory) {
				/*boolean value to determine if the hamburger menu is selected*/
				$scope.click = false
				/*this function is run when "browse by area"to determine if the
				browser is on the mapview. if it is, it reassigns the $scope.map
				to the current geoLocation, regardless of state params*/
				$scope.whereAmI = function(){
					if ($state.current.name === "mapView") {
						mapFactory.searchByLocation().then(response=>{
							$scope.map.center.latitude = response.lat
							$scope.map.center.longitude = response.lng
						})
					}
				}
				/**/
				$scope.menuClick = function(bool){
					(bool !== false) ?  $scope.click = !$scope.click : $scope.click = false
				}
				$scope.keyDown = function(e) {
					var numberBoolean = Number(e)
					if (e.length !== 5 || !numberBoolean){
						alert("Please enter a valid zipcode.")
						$scope.zipcode = ""
					}
					else {
						// $state.go("mapView", {lat: 45 , lng: -73 }) // TODO: change this to zip provided params
						mapFactory.searchByZipcode(e).then(response => {
							$state.go("mapView", {lat: response.lat, lng: response.lng})
						})
					}
				}
				$scope.code = function (e){
				}

			}
	}
})
