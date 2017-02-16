angular.module("app")
.factory("beerFactory", function($http){
	return {
		getBeerStyles: function() {
			return $http.get("/styles")
	  }
	}
})
