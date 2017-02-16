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
		, controller: "beerListCtrl"
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
			, controller: "navBarCtrl"
	}
})
