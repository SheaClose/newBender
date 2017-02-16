angular.module("app")
.controller("beerListCtrl", function($scope, beerFactory){
	$scope.beerStyleCats = []
	$scope.getStyle = (style) => {
		$scope.selectedCategory = $scope.beerStyles.filter((c,i,a)=>{
			return (style === c.category.name)
		})
	}
	$scope.getSpecificStyle= style => {
		$scope.specificStyle = style
	}

	beerFactory.getBeerStyles().then(function(response){
		$scope.beerStyles = response.data
		$scope.beerStyles.forEach((c,i,a)=>{
			if ($scope.beerStyleCats.indexOf(c.category.name)<0){
				$scope.beerStyleCats.push(c.category.name)
			}
		})
	});

})
