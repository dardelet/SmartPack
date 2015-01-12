// setting up the data picker
$('#departure_date').datepicker({
   format: 'dd/mm/yyyy',
   startDate: '+1d'
});

angular.module('app',[])
.controller('FormCtrl', ['$scope', function($scope) {
  // hide error messages until 'submit' event
  $scope.submitted = false;
  // hide success message
  $scope.showMessage = false;
  // method called from shakeThat directive
  $scope.submit = function() {
    // show success message
    $scope.showMessage = true;
  };
}])
.controller('navigationController',['$scope', function($scope) {
}])
.controller('TestFormCtrl',['$scope', function($scope) {
	$scope.durationtype="Days";
	$scope.nbrpeople=1;
	$scope.sex="Male";
	$scope.restriction=1;
	$scope.age=26;
	$scope.toggleAdvanced=function(e){
			e.preventDefault();
    		var $collapse = $('#advancedform');
		    console.log($collapse);
		    $collapse.collapse('toggle');
	}
}])
.directive('modalDialog', function() {
  return {
    restrict: 'A',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
    	console.log("detected directive");
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' data-ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
})
.controller('mainController', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}])
.directive('shakeThat', ['$animate', function($animate) {

  return {
    require: '^form',
    scope: {
      submit: '&',
      submitted: '='
    },
    link: function(scope, element, attrs, form) {
      // listen on submit event
      element.on('submit', function() {
        // tell angular to update scope
        scope.$apply(function() {
          // everything ok -> call submit fn from controller
          if (form.$valid) return scope.submit();
          // show error messages on submit
          scope.submitted = true;
          // shake that form
          $animate.addClass(element, 'shake', function() {
            $animate.removeClass(element, 'shake');
          });
        });
      });
    }
  };

}]);

//Init the search box
function initialize_search_box() {

  var input = document.getElementById('destination');
  var searchBox = new google.maps.places.SearchBox(input);
}
google.maps.event.addDomListener(window, 'load', initialize_search_box);
