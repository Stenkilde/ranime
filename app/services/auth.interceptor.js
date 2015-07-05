(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name ranimeApp.factory:c
	 * @description
	 * @name ranimeApp.factory:c
	 * # Auth
	 * Factory of the ranimeApp
	 */
	angular
		.module('ranimeApp')
		.factory('AuthInterceptor', AuthInterceptor);

	/* @ngInject */
	function AuthInterceptor(AuthFactory) {
		return {
			request: addToken
		};

		function addToken(config) {
			var token = AuthFactory.getToken();
			if(token) {
				config.headers = config.headers || {};
				config.headers.Authorization = 'Bearer ' + token;
			}
			return config;
		}
	}



})();