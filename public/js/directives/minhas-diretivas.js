angular.module('minhasDiretivas', []); // Module definition with the array []

angular.module('minhasDiretivas') //Get the module and add the first directive:
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	});

angular.module('minhasDiretivas') //Get the module and add the second directive:
	.directive('minhaFoto', function() {

		var ddo = {};

		ddo.restrict = "AE";
		ddo.transclude = true;


		ddo.scope = {
			url: '@',
			titulo: '@'
		};

		ddo.templateUrl = 'js/directives/minha-foto.html';

		return ddo;
	});
	
