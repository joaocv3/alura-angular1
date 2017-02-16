angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']).
config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true); // allow route to be written without hash: http://localhost:3000/fotos instead of http://localhost:3000/#/fotos 

	$routeProvider.when('/fotos',{
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new',{
		templateUrl: 'partials/foto.html'
	});

	$routeProvider.otherwise({ redirectTo: '/fotos'});
});
