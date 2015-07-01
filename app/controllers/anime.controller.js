(function () {
	'use strict';

	angular
		.module('ranimeApp')
		.controller('AnimeController', ctrl);

	/* @ngInject */
	function ctrl($http) {
		/*jshint validthis: true */
		var vm 			= this;

		vm.postname		= null;
		vm.data			= {};
		vm.postAnime	= postAnime;

		$http.get('/api/animes').
		  success(function(data, status, headers, config) {
		  	vm.data = data;
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
			console.log('You fucked up!');
		  })
	  	
		function postAnime() {
			console.log(vm.postname);
			$http({
	            method: "POST",
	            url: '/api/animes',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            data: {
	                name: vm.postname
	            }
	        })
	        .success(function(data){
	  			console.log('It should work yep!');
	  		}).error(function(data) {
	  			console.log('we fucked up');
	  		});
	}
})();