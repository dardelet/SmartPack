app.controller('FormCtrl', ['$scope', '$ev' , function($scope, $ev) {
    // hide error messages until 'submit' event
    $scope.submitted = false;
    // hide success message
    $scope.showMessage = false;
    // method called from shakeThat directive
    $scope.submit = function() {
        // show success message
        $scope.showMessage = true;
        $ev.emit('logged:true', true);
    };
    $ev.on('logged:false', function (value) {
	    $scope.submitted = false;
	    $scope.showMessage = false;
    });
}]);