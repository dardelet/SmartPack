
var screen_height=$(window).height();
$('section').css('min-height',screen_height+'px');
$(window).on('resize', function(){
      var win = $(this); //this = window
      $('section').css('min-height',win.height+'px');
});
var language='fr-FR';
// setting up the data picker
$('#departure_date').datepicker({
   format: 'dd/mm/yyyy',
   startDate: '+1d',
   clearBtn:true,
   forceParse:true,
   autoclose:true,
   language:language
});

angular.module('app',[])
.controller('FormCtrl', ['$scope', function($scope) {
  // hide error messages until 'submit' event
  $scope.submitted = false;
  // hide success message
  $scope.showMessage = false;
  // method called from shakeThat directive
  $scope.submit = function() {
    // show success message
    $scope.showMessage = true;
  };
}])
.controller('navigationController',['$scope', function($scope) {
}])
.controller('TestFormCtrl',['$scope', function($scope) {
	$scope.durationtype="Days";
	$scope.nbrpeople=1;
	$scope.sex="Male";
	$scope.restriction=1;
	$scope.age=26;
  $scope.advancedShown=false;
	$scope.toggleAdvanced=function(e){
			e.preventDefault();
    		var $collapse = $('#advancedform');
		    $collapse.collapse('toggle');
        $scope.advancedShown=!$scope.advancedShown;
        updateButton();
	}
  function updateButton(){
    if($scope.advancedShown){
      $('#advanced_button').html("Less  &laquo;")
    }else{
      $('#advanced_button').html("Advanced  &raquo;")
    }
  }
}])
.directive('modalDialog', function() {
  return {
    restrict: 'A',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' data-ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
})
.controller('mainController', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}])
.directive('shakeThat', ['$animate', function($animate) {

  return {
    require: '^form',
    scope: {
      submit: '&',
      submitted: '='
    },
    link: function(scope, element, attrs, form) {
      // listen on submit event
      element.on('submit', function() {
        // tell angular to update scope
        scope.$apply(function() {
          // everything ok -> call submit fn from controller
          if (form.$valid) return scope.submit();
          // show error messages on submit
          scope.submitted = true;
          // shake that form
          $animate.addClass(element, 'shake', function() {
            $animate.removeClass(element, 'shake');
          });
        });
      });
    }
  };

}])
.controller('categoryListController',['$scope',function($scope) {
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

//Init the search box
function initialize_search_box() {

  var input = document.getElementById('destination');
  var searchBox = new google.maps.places.SearchBox(input);
}
google.maps.event.addDomListener(window, 'load', initialize_search_box);
