angular.module("app")
.controller("mainCtrl", function($scope, mainService, uiGmapGoogleMapApi){
	$scope.test = "test"


	uiGmapGoogleMapApi.then(function(maps) {

	});
})
