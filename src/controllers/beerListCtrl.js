angular.module("app")
.controller("beerListCtrl", function($scope, beerFactory){
	$scope.beerStyleCats = []
	$scope.styleIsSelected = false;
	$scope.categoryIsSelected = false;

	$scope.changeCategory = (direction) => {
		var tops = $scope.beerStyleCats.length;
		var cat = $scope.selectedCategory[0].categoryId
		//Ensures the lowest number "goTo could be is 1"
		var goTo = direction === 'prev' ? ((cat - 1)  ? (cat - 1) : 1 ) : ((cat + 1)<=tops ? (cat + 1) : cat)
		$scope.selectedCategory = $scope.beerStyles.filter((c,i,a)=>{
			return (c.categoryId === goTo)
		})
	}

	$scope.changeStyle = (direction) => {
		var cat = $scope.specificStyle.id
		//Ensures the lowest number "goTo could be is 1"
		var goTo = direction === 'prev' ? ((cat - 1)  ?(cat - 1):1 ) : (cat + 1)
		$scope.specificStyle = $scope.beerStyles.filter((c,i,a)=>{
			return (c.id === goTo)
		})[0]
	}

	$scope.backToCategories = () => {
		$scope.styleIsSelected = false;
		$scope.categoryIsSelected = false;
	}
	$scope.backToStyles = () => {
		$scope.categoryIsSelected = true;
		$scope.styleIsSelected = false;
	}
	$scope.getStyle = (style) => {
		$scope.categoryIsSelected = true;
		$scope.selectedCategory = $scope.beerStyles.filter((c,i,a)=>{
			return (style === c.category.name)
		})
	}
	$scope.getSpecificStyle= style => {
		$scope.styleIsSelected = true;
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
