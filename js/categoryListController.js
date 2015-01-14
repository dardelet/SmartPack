app.controller('categoryListController',['$scope',function($scope) {
    $scope.categories = [
	{
	    id:1,
	    objects:[
		{
		    name:"Tooothbrush",
		    quantity:1,
		    imgsrc:"http://www.formfonts.com/files/1/8035/experience-superior-cleaning-with-multifunctional-bristles-polishing-cups_FF_Model_ID8035_3_Colgate_360_toothbrush_purple_FMH_1235.jpg"
		},
		{
		    name:"Razor",
		    quantity:1,
		    imgsrc:"http://cdn2.hubspot.net/hub/208988/file-2032658058-jpg/razor.jpg"
		},
		{
		    name:"Toothpaste",
		    quantity:1,
		    imgsrc:"http://www.dontforgettobrush.net/wp-content/uploads/2013/11/whitening-toothpaste.jpg"
		}
	    ]
	},
	{
	    id:2,
	    objects:[
		{
		    name:"Tshirt",
		    quantity:1,
		    imgsrc:"http://www.qualitylogoproducts.com/custom-tshirts/gildan-ultracotton-tshirt-white-extralarge.jpg"
		},
		{
		    name:"Pants",
		    quantity:1,
		    imgsrc:"http://ak1.ostkcdn.com/images/products/7946234/Something-Strong-Mens-Dark-Olive-Straight-Leg-Five-Pocket-Pants-P15320080.jpg"
		},
		{
		    name:"Coat",
		    quantity:1,
		    imgsrc:"http://disco90s.com/wp-content/uploads/2014/03/Gents-Lined-Coat_A_SS-1.jpg"
		}
	    ]
	},
	    id:3,
	    objects:[
		{
		    name:"Beach towel"
		    quantity:1,
		    imgsrc:"https://www.aneesi.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beach_atlantis_01_1.jpg"
		},
		{
		    name:"Beach sandal"
		    quantity:1,
		    imgsrc:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=58448706"
		},
		{
		    name:"Beach ball"
		    quantity:1,
		    imgsrc:"https://www.beachballs.com/images/AD_36_Rainbow.png"
		}
	    ]
	}
    ];

    $scope.addCategory = function () {
	var category = new Object();
	category.id = $scope.categories.length + 1;
	category.objects = [];
	$scope.categories.push(category);
    }

    $scope.handleObject = function (name) {
	if (typeof $scope[name] !== "undefined"){
	    $scope[name] = !$scope[name];
	} else {
	    $scope[name]=true;
	}
    }

}]);
