(function () {
	'use strict';

	angular
		.module('ranimeApp')
		.controller('AnimeController', ctrl);

	/* @ngInject */
	function ctrl($http, $state, UserFactory) {
		/*jshint validthis: true */
		var vm 			= this;

		vm.postname		= null;
		vm.data			= {};
		vm.postAnime	= postAnime;
		vm.randomAnime	= randomAnime;
		vm.login		= login;
		vm.logout		= logout;
		vm.handleError	= handleError;


		// Initialize view
		UserFactory.getUser().then(function success(response) {
			vm.user = response.data;
		});

		$http.get('/api/animes').
		  success(function(data, status, headers, config) {
		  	vm.data = data;
		  }).
		  error(function(data, status, headers, config) {
			console.log('You fucked up!');
		  });
	  	
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


		function login(username, password) {
	      	UserFactory.login(vm.username, vm.password).then(function success(response) {
	        	vm.user = response.data.user;
	      	}, handleError);
	    }

	    function logout() {
	    	UserFactory.logout();
	    	vm.user = null;
	    }

		function handleError(response) {
			alert('Error: ' + response.data);
		}
	}
})();