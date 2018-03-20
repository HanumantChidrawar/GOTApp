//Controller for single character view

myApp.controller('characterController',['$http','$routeParams',function($http, $routeParams){


  var main=this;
  this.characterNo= $routeParams.characterNo;
  this.allegiances=[];
  this.books=[];
  this.povBooks=[];
  this.none="None";

  $http.get("https://www.anapioficeandfire.com/api/characters/" + main.characterNo).then(function successCallBack(response){

    console.log(response);
    main.characterData = response.data;

    console.log(main.characterData.playedBy[0]);

    main.father=(main.characterData.father.split('/').pop());
    main.mother=(main.characterData.mother.split('/').pop());
    main.spouse=(main.characterData.spouse.split('/').pop());

    for(var i=0; i < main.characterData.allegiances.length ; i++){
    main.number=(main.characterData.allegiances[i].split('/').pop());
    main.allegiances.push(main.number);
}

for(var i=0; i < main.characterData.books.length ; i++){
    main.number=(main.characterData.books[i].split('/').pop());
    main.books.push(main.number);
}

for(var i=0; i < main.characterData.povBooks.length ; i++){
    main.number=(main.characterData.povBooks[i].split('/').pop());
    main.povBooks.push(main.number);
}

  }, function errorCallBack(response){

    console.log("Error occured");

  });




}]);//end of controller
