'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/view1',{
		templateUrl:'./view1/view1.html',
		controller:'view1Ctr'
	})
	.when('/view2',{
		templateUrl:'./view2/view2.html',
		controller:'view2Ctr'
	})
	.otherwise({
		redirectTo:'/view1'
	})
}])
.controller('view1Ctr',function($scope){
	$scope.name = 'name view1';
	console.log('view1');
})
.controller('view2Ctr',function($scope){
	$scope.name = 'name view2';
	console.log('view2');
});
