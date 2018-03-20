//Configuring the Controller for all houses view.

myApp.controller('booksController',['$http','getService',function($http,getService){


  var main=this;
  this.none="None";
  this.allbooks=[];

  getService.fetch(1,1).then(function successCallBack(response){

    console.log(response);
    main.allbooks = response.data;

  }, function errorCallBack(response){

    console.log("Error occured");

  });




}]);
