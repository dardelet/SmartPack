app.controller('categoryListController',['$scope',function($scope) {
    
	$scope.objectsToChoose = [
		{
		    name:"Keys",
		    quantity:1,
		    imgsrc:"http://s3.amazonaws.com/digitaltrends-uploads-prod/2014/05/Keys.jpg"
		},
		{
		    name:"Wallet",
		    quantity:1,
		    imgsrc:"http://livehealthyosu.files.wordpress.com/2014/01/wallet.jpg"
		},
		{
		    name:"IDcard",
		    quantity:1,
		    imgsrc:"http://upload.wikimedia.org/wikipedia/commons/f/f6/Mustermann_nPA.jpg"
		},
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
		},
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
		},
		{
		    name:"Towel",
		    quantity:1,
		    imgsrc:"https://www.aneesi.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beach_atlantis_01_1.jpg"
		},
		{
		    name:"Sandal",
		    quantity:1,
		    imgsrc:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=58448706"
		},
		{
		    name:"Ball",
		    quantity:1,
		    imgsrc:"https://www.beachballs.com/images/AD_36_Rainbow.png"
		}
	];

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
		},
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
        {
	    id:3,
	    objects:[
		{
		    name:"Towel",
		    quantity:1,
		    imgsrc:"https://www.aneesi.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beach_atlantis_01_1.jpg"
		},
		{
		    name:"Sandal",
		    quantity:1,
		    imgsrc:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=58448706"
		},
		{
		    name:"Ball",
		    quantity:1,
		    imgsrc:"https://www.beachballs.com/images/AD_36_Rainbow.png"
		}
	    ]
	}
    ];

    $scope.reverse = false;
    $scope.predicate = 'id';

    $scope.search = new Object();
    $scope.search.id = 1;

    $scope.startPopUp = function (id){
    	$scope.search.id = id;
    	setTimeout(function(){
			$(".fancybox").trigger('click');
		}, 100);
    	
    };

    $scope.setCurrentCategory = function (number){
    	$scope.search.id = number;
    };

    $scope.addCategory = function () {
		var category = new Object();
		category.id = $scope.categories.length + 1;
		category.objects = [];
		$scope.categories.push(category);
    };

    $scope.handleObject = function (name) {
		if (typeof $scope[name] !== "undefined"){
		    $scope[name] = !$scope[name];
		} else {
		    $scope[name]=true;
		}
    };

    $scope.addObject = function (object) {
    	//alert(JSON.stringify(object));
    	if (object == undefined)
    		return
    	if($scope.categories[$scope.search.id - 1].objects.indexOf(object) == -1){
    		$scope.categories[$scope.search.id - 1].objects.push(object);
	    	$scope[object.name+2] = false;
    	}
	    	
    };

    $scope.deleteObject = function () {
    	//alert(JSON.stringify(object));
    	var object;
    	var newObjects = [];
    	for(var i = 0 ; i < $scope.categories[$scope.search.id - 1].objects.length ; i++){
    		object = $scope.categories[$scope.search.id - 1].objects[i];
    		if (!$scope[object.name+"2"])
    			newObjects.push(object)
    	}
    	$scope.categories[$scope.search.id - 1].objects = newObjects;
    };

    $scope.addQuantity = function(name) {
    	for(var i = 0 ; i < $scope.categories[$scope.search.id - 1].objects.length ; i++){
    		object = $scope.categories[$scope.search.id - 1].objects[i];
    		if (object.name === name)
    			object.quantity ++;
    	}
    };

    $scope.substractQuantity = function(name) {
    	for(var i = 0 ; i < $scope.categories[$scope.search.id - 1].objects.length ; i++){
    		object = $scope.categories[$scope.search.id - 1].objects[i];
    		if (object.name === name)
    			if(object.quantity>1)
    				object.quantity --;
    	}	
    };

}]);
