app.controller('TestFormCtrl', ['$scope','$timeout', function($scope,$timeout) {
    $scope.durationtype = "Days";
    $scope.nbrpeople = 1;
    $scope.sex = "Male";
    $scope.restriction = 1;
    $scope.age = 26;
    $scope.advancedShown = false;
    $scope.submitted = false;
    $scope.showMessage = false;

    $scope.toggleAdvanced = function(e) {
        e.preventDefault();
        var $collapse = $('#advancedform');
        $collapse.collapse('toggle');
        $scope.advancedShown = !$scope.advancedShown;
        updateButton();
    }

    function updateButton() {
        if ($scope.advancedShown) {
            $('#advanced_button').html("Less  &laquo;")
        } else {
            $('#advanced_button').html("Advanced  &raquo;")
        }
    }
    $scope.submit = function() {
        $scope.showMessage = true;
        $timeout(function () {        
            window.location.href = "category-list.html";
        },400);
    };
}]);
