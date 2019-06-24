import navBarDirective from "./directives/navBarDirective";
import config from "./appConfig";
import mapFactory from "./factories/mapFactory";
import beerFactory from "./factories/beerFactory";
// angular
// .module("app", [])
angular
  .module("app", ["ui.router", "uiGmapgoogle-maps"])
  .config(config)
  .factory("mapFactory", mapFactory)
  .factory("beerFactory", beerFactory)
  .directive("navBar", navBarDirective);
