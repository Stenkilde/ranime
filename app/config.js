var app = angular.module('ranimeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('anime', {
			url: '/',
			templateUrl: 'views/main.template.html',
			controller: 'AnimeController',
			controllerAs: 'main'
		})

});