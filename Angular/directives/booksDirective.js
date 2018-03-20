//defining the Books Directive

myApp.directive("booksDirective", function(){
	return{
		restrict: "E",
		templateUrl: "views/books-view-dir.html",
		controller: function($scope){

		}
	};
});
