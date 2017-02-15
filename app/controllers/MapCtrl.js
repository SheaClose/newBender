angular.module("app")
.controller("mapCtrl", function($scope, $state, mapFactory){
	$scope.map = {
			center: {
					latitude: $state.params.lat
				, longitude: $state.params.lng
			}
		, zoom: 12
	};
	if(!$state.params.lat && !$state.params.lng){
		(function(){
			mapFactory.searchByLocation().then(response=>{
				$scope.map = {
						center: {
								latitude: response.lat
							, longitude: response.lng
						}
					, zoom: 12
				}
			})
		})()
	}
})
