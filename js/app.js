var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
}])
