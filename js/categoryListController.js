app.controller('categoryListController', ['$scope', function($scope) {
    $scope.categories = [{
        id: 1,
        objects: [{
            name: "Lol1",
            imgsrc: ""
        }, {
            name: "Lol2",
            imgsrc: ""
        }, {
            name: "Lol3",
            imgsrc: ""
        }]
    }, {
        id: 2,
        objects: []
    }, {
        id: 3,
        objects: []
    }];

    $scope.addCategory = function() {
        var category = new Object();
        category.id = $scope.categories.length + 1;
        category.objects = [];
        $scope.categories.push(category);
    }

    $scope.handleObject = function(name) {
        if (typeof $scope[name] !== "undefined") {
            $scope[name] = !$scope[name];
        } else {
            $scope[name] = true;
        }
    }

}]);
