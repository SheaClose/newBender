angular.module("app")
.factory("mapFactory", function($http){
	return {
		searchByZipcode: function(zipCodeInput){
	    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCodeInput + "&key=AIzaSyAXQB6_1o2TlMK7coZPgfuVDAdxZtPiv9c").then(function(response){
	      return response.data.results[0].geometry.location
	    })
	  }
	}
})
