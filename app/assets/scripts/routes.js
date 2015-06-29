(function(){
	'use strict';

	angular
		.module('app.module')
		.config(routes);

		routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

		function routes ($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
			    .state('landing', {
			    	url: '/',
			   		templateUrl: 'assets/partials/landing.html',
			    	controller: "MainCtrl",
			    	controllerAs: "vm"
		    	});

		    $locationProvider.html5Mode(true);
		}
})();