
/**
*  Module
*
* Description
*/
angular.module('DMT', [])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/pages/overview.jade'
		}).
		when('/page/overview', {
			templateUrl: '/pages/overview.jade'
		}).
		when('/page/basics', {
			templateUrl: '/pages/basics.jade'
		}).
		when('/page/application', {
			templateUrl: '/pages/application.jade'
		}).
		when('/page/category', {
			templateUrl: '/pages/category.jade'
		}).
		when('/page/movieRendering', {
			templateUrl: '/pages/movieRendering.jade'
		}).
		when('/page/gameRendering', {
			templateUrl: '/pages/gameRendering.jade'
		}).
		when('/page/artistRendering', {
			templateUrl: '/pages/artistRendering.jade'
		}).
		when('/page/software', {
			templateUrl: '/pages/software.jade'
		}).
		when('/page/personalView', {
			templateUrl: '/pages/personalView.jade'
		}).
		when('/page/about', {
			templateUrl: '/pages/about.jade'
		}).
		otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	}]);