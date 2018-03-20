//Designing the  controller for all-view.html

myApp.controller('allController',['$http','getService',function($http, getService){

  var main=this;
  this.allData=[];
  this.allHouses=[];
  this.allbooks=[];
  this.allCharacters=[];
  this.none="None";
  this.ascendingButton= true;
  this.descendingButton= false;

//fetching all the books data
  getService.fetch(1,1).then(function successCallBack(response){

    //console.log(response);
    main.allbooks = response.data;
    for(var j=0; j< response.data.length ; j++){
    main.allData.push(response.data[j]);}
    console.log(main.allData);
  }, function errorCallBack(response){

    console.log("Error occured");

  });//end of get Service for fetching all books data

//Fetching all the pages containing Houses Data
  for(var i=0; i < 9 ;i++){
    getService.fetch(0,i).then(function successCallBack(response){
    main.allHouses.push(response.data);
  //  console.log(response.data);
    for(var j=0; j< response.data.length; j++){
    main.allData.push(response.data[j]);}
  //  console.log(main.allData);
    //console.log(main.allHouses);
  },function errorCallBack(response){
    console.log("Error occured");
  });// end of fetching all houses
}

//Fetching all the pages containing the Characters data
  for(var i=0; i < 48 ;i++){
    getService.fetch(2,i).then(function successCallBack(response){
    main.charactersData1 = response.data;
    main.allCharacters.push(main.charactersData1);
    //console.log(response.data);
    for(var j=0; j< response.data.length; j++){
    main.allData.push(response.data[j]);}
  //  console.log(main.allData);
    //console.log(main.allCharacters);
   },function errorCallBack(response){
    console.log("Error occured");
  });
}//end of fetching all the characters

// Function for sorting the Data by Name
  this.sort=function(){

    if(main.ascendingButton){
      main.ascendingButton= false;
      main.orderIn= 'Name';
      main.descendingButton= true;
    }
    else{
      main.descendingButton= false;
      main.orderIn= '-Name';
      main.ascendingButton= true;
    }

  }// end of order function

}]);
