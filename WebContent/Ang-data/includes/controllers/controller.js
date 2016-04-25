var myApp = angular.module('myApp', ['ui.router']);





myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
           templateUrl: 'banner_home.html',
        controller: 'AppCtrl'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('ayatreader', {
            url: '/surah/:sid',
           templateUrl: 'ayatreader.html',
        controller: 'AppCtrl2'   
        });
        
});



myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("controller 1");


var refresh = function() {

//username get call



//ayat data get  call 

  $http.get('http://localhost:8080/Noor-E-Iman/Quran/listofallsurahs').success(function(response) {
    console.log("GET  REQ FOR ALL SURAH SUCCESS ");

    
   
    $scope.surahlist = response;

     
  });


   
};


console.log('CTRL 111111111');
refresh();




}]);﻿



myApp.controller('AppCtrl2', ['$scope', '$http','$stateParams', function($scope, $http,$stateParams) {
    console.log("controller 2"+$stateParams.sid);


var refresh = function() {

//username get call



//ayat data get  call 

  $http.get('http://localhost:8080/Noor-E-Iman/Quran/surah/'+$stateParams.sid+'/list').success(function(response) {
    console.log("GET  REQ FOR suah 1 list  SUCCESS ");

    
   
    $scope.ayatlist = response;

     
  });








   
};


  

   



console.log('ctrl2222222222222!');
refresh();

$scope.displaychapter = function() {
   console.log("DISPLAY SURAH!! "+$scope.chapter);
  
}






}]);﻿
