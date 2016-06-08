var myApp = angular.module('myApp', []);

//Setting Domain to get around CORS

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

	$http.get('/api/civs').success(function(response){
		console.log("I got the data I requested");
		$scope.civs = response;
	})
}]);