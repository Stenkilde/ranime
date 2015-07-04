(function () {
	'use strict';

	angular
		.module('ranimeApp')
		.controller('AnimeController', ctrl);

	/* @ngInject */
	function ctrl($http, $state) {
		/*jshint validthis: true */
		var vm 			= this;

		vm.postname		= null;
		vm.data			= {};
		vm.postAnime	= postAnime;
		vm.randomAnime	= randomAnime;

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
	            headers: {'Content-Type': 'application/json'},
	            data: {
	                name: vm.postname
	            }
	        })
	        .success(function(data){
	  			$state.go($state.current, {}, {reload: true});
	  		}).error(function(data) {
	  			alert('Erro!: You did something wrong!');
	  		});
	  	}
	  	function randomAnime() {
  			var randomizeAnime = vm.data[Math.floor(Math.random() * vm.data.length)];
  			alert('You should totally watch ' + randomizeAnime.name + '!');
	  	}
	}
})();