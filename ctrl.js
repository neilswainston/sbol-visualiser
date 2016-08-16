const sboljs = require('./sboljs')

sbolVisualiserApp.controller("sbolVisualiserCtrl", ["$http", "$scope", function($http, $scope) {
	$scope.url = "http://visbol.org/sbol2.xml";
	$scope.doc = null;
	$scope.def = null;
	
	$scope.$watch('url', function(newValue, oldValue) {
		$http.get($scope.url).then(
			function(resp) {
				sboljs.getSBOLDocument(resp.data, function(resp)
				{
					$scope.doc = resp;
					$scope.$apply();
				});
			},
			function(resp) {
				$scope.doc = null;
			})
		});
	
	$scope.setDefinition = function(def) {
		$scope.def = def;
	};
}]);

