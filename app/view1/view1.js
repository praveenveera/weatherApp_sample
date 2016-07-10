'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','cityService', function($scope,cityService) {
	$scope.city= cityService.city;

	$scope.$watch('city',function(){
		cityService.city=$scope.city;
		console.log('its working ')
	})
}]);