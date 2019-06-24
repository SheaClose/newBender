import homeTmpl from "./views/home.html.as-url";
import breweryTmpl from "./views/brewery.html.as-url";
import browseBeerStylesTmpl from "./views/browseBeerStyles.html.as-url";
import mapTmpl from "./views/map.html.as-url";
import searchBreweriesTmpl from "./views/searchBreweries.html.as-url";

function config(
  $stateProvider,
  $urlRouterProvider,
  uiGmapGoogleMapApiProvider,
  $qProvider
) {
  $qProvider.errorOnUnhandledRejections(false);
  uiGmapGoogleMapApiProvider.configure({
    key: "AIzaSyA_P3aNHcSScP9gucZMw1JHvViv5tdw6DE",
    v: "3.20",
    libraries: "weather,geometry,visualization"
  });
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: homeTmpl
    })
    .state("mapView", {
      url: "/map/:lat/:lng",
      templateUrl: mapTmpl,
      controller: "mapCtrl"
    })

    .state("searchBreweries", {
      url: "/searchBreweries/:brewery",
      templateUrl: searchBreweriesTmpl,
      controller: "breweryHomeCtrl"
    })
    .state("browseBeerStyles", {
      url: "/browseBeerStyles",
      templateUrl: browseBeerStylesTmpl,
      controller: "beerListCtrl"
    })
    .state("brewery", {
      url: "/brewery/:bId",
      templateUrl: breweryTmpl,
      controller: "breweryHomeCtrl"
    });
}

export default [
  "$stateProvider",
  "$urlRouterProvider",
  "uiGmapGoogleMapApiProvider",
  "$qProvider",
  config
];
