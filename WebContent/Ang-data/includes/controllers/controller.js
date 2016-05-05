var myApp = angular.module('myApp', [ 'ui.router' ]);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATE========================================
	.state('home', {
		url : '/home',
		templateUrl : 'banner_home.html',
		controller : 'AppCtrl'
	})

	// Ayats according to surah  =================================
	.state('surahreader', {
		url : '/surah/:sid',
		templateUrl : 'surahreader.html',
		controller : 'AppCtrl2'
	})
	
	//surah and ayat chosen by user 
	.state('ayatreader', {
		url : '/surah/:sid/ayat/:aid',
		templateUrl : 'ayatreader.html',
		controller : 'AppCtrl3'
	})
	
	;

});

myApp
		.controller(
				'AppCtrl',
				[
						'$scope',
						'$http',
						function($scope, $http) {
							console.log("controller 1");

							$scope.onorderupdate  = function() {

								// username get call

								// ayat data get call
var elasticqry='http://localhost:9200/orders/order/_search?q='+$scope.orderdata+'&pretty=%22true%22';
console.log(elasticqry);
								$http
										.get(
												elasticqry)
										.success(
												function(response) {
													console
															.log("GET  REQ FOR elastic success "+$scope.orderdata);
console.log(response.hits.hits);
													$scope.elasticresponse = response.hits.hits;

												});

							
								};

							console.log('CTRL 111111111');
							

							
							
						
							
							

						
							

							
							
							

						} ]);
