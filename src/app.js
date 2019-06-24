import navBarDirective from "./directives/navBarDirective";
import config from "./appConfig";
import mapFactory from "./factories/mapFactory";
import beerFactory from "./factories/beerFactory";
import breweryHomeCtrl from "./controllers/breweryHomeCtrl";
import beerListCtrl from "./controllers/beerListCtrl";
import mapCtrl from "./controllers/MapCtrl";
import navBarCtrl from "./controllers/navBarCtrl";

angular
  .module("app", ["ui.router", "uiGmapgoogle-maps"])
  .config(config)
  .factory("mapFactory", mapFactory)
  .factory("beerFactory", beerFactory)
  .directive("navBar", navBarDirective)
  .controller("breweryHomeCtrl", breweryHomeCtrl)
  .controller("beerListCtrl", beerListCtrl)
  .controller("mapCtrl", mapCtrl)
  .controller("navBarCtrl", navBarCtrl);
