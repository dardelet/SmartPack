app.controller('FormCtrl', ['$scope', function($scope) {
    // hide error messages until 'submit' event
    $scope.submitted = false;
    // hide success message
    $scope.showMessage = false;
    // method called from shakeThat directive
    $scope.submit = function() {
        // show success message
        $scope.showMessage = true;
    };
}]);