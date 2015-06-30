(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name ranimeApp.factory:Animes
	 * @description
	 * # Animes
	 * Factory of the ranimeApp
	 */
	angular
		.module('ranimeApp')
		.factory('Animes', Animes);

	/* @ngInject */
	function Animes($http) {
	}

})();