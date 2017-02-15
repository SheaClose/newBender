angular.module("app")
.controller("mapCtrl", function($scope, $state){
	$scope.map = {
			center: {
					latitude: $state.params.lat
				, longitude: $state.params.lng
			}
		, zoom: 12
	};

})
