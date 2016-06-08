var myApp = angular.module('myApp', ['ngRoute']);

//Setting Domain to get around CORS
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'home.html'
		})
		.when('/Civilizations', {
			templateUrl:'civilizations.html'
		})
		.when('/Strategy',{
			templateUrl:'strategy.html'
		})
		.when('/Tiles',{
			templateUrl:'tiles.html'
		})
		.otherwise({ redirectTo:'/'})
}]);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

	$http.get('/api/civs').success(function(response){
		console.log("I got the data I requested");
		$scope.civs = response;
	})
}]);
