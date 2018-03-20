//Controller for single book view

myApp.controller('bookController',['$http','$routeParams',function($http, $routeParams){


  var main=this;
  this.bookNo= $routeParams.bookNo;
  this.characters=[];
  this.povCharacters=[];
  this.none="None";

  $http.get("https://www.anapioficeandfire.com/api/books/" + main.bookNo).then(function successCallBack(response){

    console.log(response);
    main.bookData = response.data;

    for(var i=0; i < main.bookData.characters.length ; i++){
        main.number=(main.bookData.characters[i].split('/').pop());
        main.characters.push(main.number);
    }
    
    for(var i=0; i < main.bookData.povCharacters.length ; i++){
        main.number=(main.bookData.povCharacters[i].split('/').pop());
        main.povCharacters.push(main.number);
    }

  }, function errorCallBack(response){

    console.log("Error occured");

  });

}]);//end of controller
