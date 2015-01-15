app.directive('myRepeatDirective', function($timeout) {
  return function(scope, element, attrs) {
    if (scope.$last){
    	$timeout(function () {
    		updateNav();
        });
    }
  };
});