angular.module("app", ['ui.router', /*'uiGmapgoogle-maps'*/])
.config(function($stateProvider, $urlRouterProvider/*, uiGmapGoogleMapApiProvider*/){
  /*uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCIdWvV8D7BDxSAOzFP8A5lJUrVoENki30',
      v: '3.20',
      libraries: 'weather,geometry,visualization'
  })*/
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url: "/"
    , templateUrl: "./public/views/home.html"
  })
  .state("mapView", {
      url: "/map/:lat/:lng"
    , templateUrl: "./public/views/map.html"
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
			// template: `<div class="links">
			// 	<a ui-sref="home">Home</a> <a ui-sref="mapView">Map</a> <a ui-sref="browseBeers">Beer</a> <a ui-sref="browseBreweries">Breweries</a> <a ui-sref="browseBeerStyles">Styles</a>
			//
			// </div>`
			templateUrl: "./public/views/navBar.html"
	}
})
