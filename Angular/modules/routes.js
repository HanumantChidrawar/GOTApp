//Configuring the routes for game of thrones App.

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl:'views/index-view.html'
      })
      .when('/houses',{
        templateUrl:'views/houses-view.html',
        controller:'allController',
        controllerAs: 'all'
      })
       .when('/books',{
        templateUrl:'views/books-view.html',
        controller:'allController',
        controllerAs: 'all'
      })
       .when('/book/:bookNo',{
        templateUrl:'views/book-view.html',
        controller: 'bookController',
        controllerAs: 'book'
      })
       .when('/house/:houseNo',{
        templateUrl:'views/house-view.html',
        controller: 'houseController',
        controllerAs: 'house'
      })
      .when('/characters',{
        templateUrl:'views/characters-view.html',
        controller:'allController',
        controllerAs: 'all'
      })
      .when('/character/:characterNo',{
        templateUrl:'views/character-view.html',
        controller: 'characterController',
        controllerAs: 'character'
      })
      .when('/all',{
        templateUrl:'views/all-view.html',
        controller:'allController',
        controllerAs: 'all'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
