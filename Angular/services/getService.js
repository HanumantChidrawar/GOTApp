//building my getService.

myApp.service('getService',function($http){

this.baseUrl=["https://www.anapioficeandfire.com/api/houses?page=","https://www.anapioficeandfire.com/api/books?page=","https://www.anapioficeandfire.com/api/characters?page="];
var main=this;

this.fetch=function(url,pageno){

 return $http.get(main.baseUrl[url] + pageno +"&pageSize=50" );

}

});
