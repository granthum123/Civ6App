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
		.when('/Civs/:name', {
			templateUrl:'civDetails.html'
		})
		.otherwise({ redirectTo:'/'})
}]);

myApp.controller('civCtrl', ['$scope', '$http', function($scope, $http) {

	$http.get('/api/civs').success(function(response){
		console.log("I got the array of civs I requested");
		$scope.civs = response;
	})

}]);
myApp.controller('civDetailCtrl', ['$scope', '$http', function($scope, $http){

	$http.get('/api/civs/:name').success(function(response){
		console.log("I got the civ I requested");
		$scope.civ = response;
	})
}])
