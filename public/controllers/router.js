var app=angular.module('Demo',["ngRoute"]);
console.log("in angular");
app.config(function ($routeProvider,$locationProvider)
	{
		console.log("in config");
		$routeProvider
			.when("/home",{
				 templateUrl:"home.html",
				controller:"homeController"
			})
			.when("/course",{
				templateUrl:"course.html",
				controller:"coursesController"
			})
			.otherwise({
        template : "<h1>None</h1><p>Nothing has been selected.<br>This shows use of otherwise option of angular</p>"
    		})
			$locationProvider.html5Mode(true);

	});

	app.controller("homeController",function($scope)
	{
		$scope.message="hey home page";
	});
	app.controller("coursesController",function($scope)
	{
		$scope.courses=["c","java","c++"];
	});