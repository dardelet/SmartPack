var app = angular.module('app', ['EventEmitterService','ngAnimate']);
app.controller('mainController', ['$scope','$ev', function($scope,$ev) {
    $scope.modalShown = false;
    $scope.logged=false;
    $scope.name="Radhwane";
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
    $scope.disconnect = function(){
    	$scope.logged=false;
    	$ev.emit('logged:false', false);
    };
    $ev.on('logged:true', function (value) {
            $scope.logged = true;
	        $scope.modalShown = !$scope.modalShown;
    });
}])
