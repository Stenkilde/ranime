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
		  	//$http.post('/api/animes', postdata).success(function(data, status, header) {
		  	//	console.log('I posted something!');
		  	//}).error(function(data, staus, headers) {
		  	//	console.log('UH UH!');
		  	//});

		  	$http.post('/api/animes', vm.postname, 'multipart/form-data', 'application/json')
		  		.success(function(data){
		  			console.log('WE SEND SOMETHING TO YOU!');
		  		}).error(function(data) {
		  			console.log('we fucked up');
		  		});
		}




	}
})();