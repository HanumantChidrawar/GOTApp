//defining the Books Directive

myApp.directive("charactersDirective", function(){
	return{
		restrict: "E",
		templateUrl: "views/characters-view-dir.html",
		controller: function($scope){

		}
	};
});
