var myApp = angular.module('myApp', [ 'ui.router' ]);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	.state('home', {
		url : '/home',
		templateUrl : 'banner_home.html',
		controller : 'AppCtrl'
	})

	// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	.state('ayatreader', {
		url : '/surah/:sid',
		templateUrl : 'ayatreader.html',
		controller : 'AppCtrl2'
	});

});

myApp
		.controller(
				'AppCtrl',
				[
						'$scope',
						'$http',
						function($scope, $http) {
							console.log("controller 1");

							var refresh = function() {

								// username get call

								// ayat data get call

								$http
										.get(
												'http://localhost:8080/Noor-E-Iman/Quran/listofallsurahs')
										.success(
												function(response) {
													console
															.log("GET  REQ FOR ALL SURAH SUCCESS ");

													$scope.surahlist = response;

												});

							};

							console.log('CTRL 111111111');
							refresh();

							$scope.displaychapter = function() {

								console.log($scope.ayat);

							}

						} ]);
myApp
		.controller(
				'AppCtrl2',
				[
						'$scope',
						'$http',
						'$stateParams',
						function($scope, $http, $stateParams) {

							console.log("controller 2" + $stateParams.sid);

//							var url = window.location.href;
//							var urlArray = url.split('/');
//							if (urlArray[5] === "surah") {
//								document.getElementsByClassName("footer_links")[0].style.display = "none";
//								document.getElementsByTagName("html")[0].style.background = "#ffffff";
//							} else {
//								document.getElementsByClassName("footer_links")[0].style.display = "block";
//								document.getElementsByTagName("html")[0].style.background = "#c0c0c0";
//							}

							var refresh = function() {

								// username get call

								// ayat data get call

								$http
										.get(
												'http://localhost:8080/Noor-E-Iman/Quran/surah/'
														+ $stateParams.sid
														+ '/list')
										.success(
												function(response) {
													console
															.log("GET  REQ FOR surah 's ayats  SUCCESS ");

													$scope.ayatlist = response;

												});
								
								
								$http
								.get(
										'http://localhost:8080/Noor-E-Iman/Quran/surah/'
												+ $stateParams.sid
												)
								.success(
										function(response) {
											console
													.log("GET  REQ FOR surah name success");

											$scope.surah = response;

										});
								
					

							};

							console.log('ctrl2222222222222!');
							refresh();

						} ]);
