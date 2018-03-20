//Configuring the Controller for all Characters view.

myApp.controller('charactersController',['$http','getService',function($http,getService){

  var main=this;
  this.none = "None";
  this.allCharacters=[];

  for(var i=0; i < 48 ;i++){
  getService.fetch(2,i).then(function successCallBack(response){

    main.charactersData1 = response.data;
    main.allCharacters.push(main.charactersData1);
   },function errorCallBack(response){
    console.log("Error occured");
  });
 }

}]);
