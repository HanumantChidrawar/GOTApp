//Configuring the Controller for all houses view.

myApp.controller('housesController',['$http','getService',function($http,getService){


  var main=this;
  this.none="None";
  this.allHouses=[];

  for(var i=0; i < 9 ;i++){
  getService.fetch(0,i).then(function successCallBack(response){
    main.allHouses.push(response.data);
  },function errorCallBack(response){
    console.log("Error occured");
  });
}

}]);
