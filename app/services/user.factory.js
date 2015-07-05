(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name ranimeApp.factory:Users
	 * @description
	 * # Users
	 * Factory of the ranimeApp
	 */
	angular
		.module('ranimeApp')
		.factory('UserFactory', UserFactory);

	/* @ngInject */
	function UserFactory($http) {
		return {
			login: login
		};

		function login(username, password) {
			return 	$http({
				method: "POST",
				url: '/login',
				headers: {'Content-Type': 'application/json'},
				data: {
					username: username,
					password: password
				}
			});
		}
	}



})();