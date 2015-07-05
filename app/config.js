var app = angular.module('ranimeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('anime', {
			url: '/',
			templateUrl: 'views/main.template.html',
			controller: 'AnimeController',
			controllerAs: 'main'
		})

});