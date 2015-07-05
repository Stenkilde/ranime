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
	function UserFactory($http, AuthFactory, $q) {
		return {
			login: login,
			logout: logout,
			getUser: getUser
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
			}).then(function success(response) {
			    AuthFactory.setToken(response.data.token);
			    return response;
			  });
		}

		function logout() {
			AuthFactory.setToken();
		}

		function getUser() {
			if(AuthFactory.getToken()) {
				return $http.get('/me');
			} else {
				return $q.reject({ data:  'client has no auth token' });
			}
		}
	}



})();