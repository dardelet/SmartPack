app.controller('FormCtrl', ['$scope', '$ev','$timeout' , function($scope, $ev,$timeout) {
    // hide error messages until 'submit' event
    $scope.submitted = false;
    // hide success message
    $scope.showMessage = false;
    // method called from shakeThat directive
    $scope.submit = function() {
        // show success message
        $scope.showMessage = true;
        $timeout(function () {        
            $ev.emit('logged:true', true);
        },200);
    };
    $ev.on('logged:false', function (value) {
	    $scope.submitted = false;
	    $scope.showMessage = false;
    });
}]);