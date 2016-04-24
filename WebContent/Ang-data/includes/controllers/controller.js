var myApp = angular.module('myApp', []);



myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {

//username get call



//ayat data get  call 

  $http.get('http://localhost:8080/Noor-E-Iman/Quran/listofallsurahs').success(function(response) {
    console.log("GET  REQ FOR AYATOFTHEDAY SUCCESS ");

    
   
    $scope.surahlist = response;

     
  });





   
};


  

   



console.log('REFRESH EXECUTED!');
refresh();






}]);﻿