var app = angular.module('app', ['EventEmitterService','ngAnimate']);
app.controller('mainController', ['$scope','$ev', function($scope,$ev) {
    $scope.modalShown = false;
    $scope.logged=false;
    if(window.localStorage){
        if(localStorage.logged ==="true"){
            $scope.logged=true;
        }
    }
    $scope.name="User";
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
    $scope.disconnect = function(){
    	$scope.logged=false;
        if(window.localStorage){
            localStorage.logged = "false";
        }
    	$ev.emit('logged:false', false);
    };
    $ev.on('logged:true', function (value) {
            $scope.logged = true;
            if(window.localStorage){
                localStorage.logged = "true";
            }
	    $scope.modalShown = !$scope.modalShown;
    });
}])
