// import homeTmpl from "./views/home.html";
// console.log("homeTmpl: ", homeTmpl);
// import breweryTmpl from "./views/brewery.html";
// import browseBeerStylesTmpl from "./views/browseBeerStyles.html";
// import mapTmpl from "./views/map.html";
// import searchBreweriesTmpl from "./views/searchBreweries.html";

function config(
  $stateProvider,
  $urlRouterProvider,
  uiGmapGoogleMapApiProvider,
  $qProvider
) {
  $qProvider.errorOnUnhandledRejections(false);
  uiGmapGoogleMapApiProvider.configure({
    key: "AIzaSyD48MJ_f0TCqUdP7VzwwEB_PZiz-dInePs	",
    v: "3.20",
    libraries: "weather,geometry,visualization"
  });
  $urlRouterProvider.otherwise("/");
  $stateProvider.state("home", {
    url: "/",
    // template: homeTmpl,
    template: `<nav-bar></nav-bar>`
  });
  // .state("mapView", {
  //   url: "/map/:lat/:lng",
  //   template: mapTmpl,
  //   controller: "mapCtrl"
  // })

  // .state("searchBreweries", {
  //   url: "/searchBreweries/:brewery",
  //   template: searchBreweriesTmpl,
  //   controller: "breweryHomeCtrl"
  // })
  // .state("browseBeerStyles", {
  //   url: "/browseBeerStyles",
  //   template: browseBeerStylesTmpl,
  //   controller: "beerListCtrl"
  // })
  // .state("brewery", {
  //   url: "/brewery/:bId",
  //   template: breweryTmpl,
  //   controller: "breweryHomeCtrl"
  // });
}

export default [
  "$stateProvider",
  "$urlRouterProvider",
  "uiGmapGoogleMapApiProvider",
  "$qProvider",
  config
];
