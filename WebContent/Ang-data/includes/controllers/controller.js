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

							
								
			var surahArray=[[1,7],[2,286],[3,200],[4,176],[5,120],[6,165],[7,206],[8,75],[9,129],[10,109],[11,123],[12,111],[13,43],[14,52],[15,99],[16,128],[17,111],[18,110],[19,98],[20,135],[21,112],[22,78],[23,118],[24,64],[25,77],[26,227],[27,93],[28,88],[29,69],[30,60],[31,34],[32,30],[33,73],[34,54],[35,45],[36,83],[37,182],[38,88],[39,75],[40,85],[41,54],[42,53],[43,89],[44,59],[45,37],[46,35],[47,38],[48,29],[49,18],[50,45],[51,60],[52,49],[53,62],[54,55],[55,78],[56,96],[57,29],[58,22],[59,24],[60,13],[61,14],[62,11],[63,11],[64,18],[65,12],[66,12],[67,30],[68,52],[69,52],[70,44],[71,28],[72,28],[73,20],[74,56],[75,40],[76,31],[77,50],[78,40],[79,46],[80,42],[81,29],[82,19],[83,36],[84,25],[85,22],[86,17],[87,19],[88,26],[89,30],[90,20],[91,15],[92,21],[93,11],[94,8],[95,8],[96,19],[97,5],[98,8],[99,8],[100,11],[101,11],[102,8],[103,3],[104,9],[105,5],[106,4],[107,7],[108,3],[109,6],[110,3],[111,5],[112,4],[113,5],[114,6]];					
								

			var randomSurah=Math.floor(Math.random()*114-1)
			console.log(randomSurah+"ayatoftheday surah");
			if(randomSurah==0)
			{
				randomSurah= randomSurah+1;
			}
			var temp=Math.random()*surahArray[randomSurah-1][1]-1;
			
			var randomVerse=Math.floor(temp);
			if(randomVerse==0)
				{
				randomVerse= randomVerse+2;
				}
			console.log(randomVerse+"ayatoftheday verse");
			
              $http.get(
                        'http://localhost:8080/Noor-E-Iman/Quran/surah/'+randomSurah+'/ayat/'+randomVerse )
                    .success(
                        function(response) {
                          console
                              .log("GET  REQ FOR ALL SURAH SUCCESS ");

                          $scope.ayat = response;

                        });




							};

							console.log('CTRL 111111111');
							refresh();

							$scope.displaychapter = function() {

								console.log($scope.ayat);

							}
							
							$scope.onsurahselect = function() {
								
								var temp1 = $scope.ayat;
//								var temp2=temp1.chapter.split(':');
							var surahNumber=temp1.chapter;
							console.log(surahNumber+" on surah change")
							
							$http
							.get(
									'http://localhost:8080/Noor-E-Iman/Quran/surah/'
											+ surahNumber
											+ '/list')
							.success(
									function(response) {
										console
												.log("GET  REQ FOR no of ayats in surah success ");

										$scope.ayatlist = response;

									});

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




myApp
.controller(
		'AppCtrl3',
		[
				'$scope',
				'$http',
				'$stateParams',
				function($scope, $http, $stateParams) {

					console.log("controller 3" + $stateParams.sid+"surah "+$stateParams.aid+" ayat");


//					}

					var refresh = function() {

						// username get call

						// ayat data get call

						$http
								.get(
										'http://localhost:8080/Noor-E-Iman/Quran/surah/'
												+ $stateParams.sid
												+ '/ayat/'+$stateParams.aid )
								.success(
										function(response) {
											console
													.log("GET  REQ FOR surah 's ayats  SUCCESS ");

											$scope.ayat = response;

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

					console.log('ctrl3333333333!');
					refresh();

				} ]);

