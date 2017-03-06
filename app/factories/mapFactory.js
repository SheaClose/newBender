angular.module("app")
.factory("mapFactory", function($http){
	return {
		searchByZipcode: function(zipCodeInput){
	    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCodeInput + "&key=AIzaSyD48MJ_f0TCqUdP7VzwwEB_PZiz-dInePs").then(function(response){
	      return response.data.results[0].geometry.location
	    })
	  },
		searchByLocation: function(){
			return $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD48MJ_f0TCqUdP7VzwwEB_PZiz-dInePs").then(function(response){
	      return response.data.location
	    })
		},
		getBreweries: function(mapObj){
			return $http.get(`/breweries/${mapObj.longitude}/${mapObj.latitude}`).then(res => {
				console.log(res);
				return res
			})
		}
	}
})
