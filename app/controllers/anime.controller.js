(function () {
	'use strict';

	angular
		.module('ranimeApp')
		.controller('AnimeController', ctrl);

	/* @ngInject */
	function ctrl($http) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.data			= {};

		$http.get('/api/animes').
		  success(function(data, status, headers, config) {
		  	vm.data = data;
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
			console.log('You fucked up!');
		  })

	}
})();