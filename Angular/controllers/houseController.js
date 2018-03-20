//Controller for single house view

myApp.controller('houseController',['$http','$routeParams',function($http, $routeParams){


  var main=this;
  this.houseNo= $routeParams.houseNo;
  this.swornMembers=[];
  this.none="None";

  $http.get("https://www.anapioficeandfire.com/api/houses/" + main.houseNo).then(function successCallBack(response){

    console.log(response);
    main.houseData = response.data;

    main.currentLord=(main.houseData.currentLord.split('/').pop());
    main.overLord=(main.houseData.overlord.split('/').pop());
    main.heir=(main.houseData.heir.split('/').pop());
    main.founder=(main.houseData.founder.split('/').pop());

    for(var i=0; i < main.houseData.swornMembers.length ; i++){
        main.number=(main.houseData.swornMembers[i].split('/').pop());
        main.swornMembers.push(main.number);
        console.log(main.houseData.swornMembers[i]);
        console.log(main.swornMembers);
    }
    for(var i=0; i < main.houseData.cadetBranches.length ; i++){
        main.number=(main.houseData.cadetBranches[i].split('/').pop());
        main.cadetBranches.push(main.number);
        console.log(main.houseData.cadetBranches[i]);
    }

  }, function errorCallBack(response){

    console.log(response);

  });




}]);//end of controller
