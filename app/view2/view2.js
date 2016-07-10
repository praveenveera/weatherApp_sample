
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view2/:days',{
  	templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','cityService','$resource','$routeParams',function($scope, cityService, $resource,$routeParams) {

	$scope.city= cityService.city;
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
	{
		callback:"JSON_CALLBACK"
	},

	{
		get :{
				method:"JSONP"
			 }
	});
	$scope.weatherResult = $scope.weatherAPI.get({
		q: $scope.city,
		cnt: $routeParams.days||2,
		appid: '9eb951b2b171b564f4aa4651f983a51c'
	});
	console.log($scope.weatherResult);

	$scope.convertTOCel = function(degC){
		return Math.round(degC - 273);
	};

	$scope.toDate=function(date){
		return date * 1000 ;
	}

}]);