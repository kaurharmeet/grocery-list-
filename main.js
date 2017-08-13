
// $('#user-email').on('keypress',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });


<!--click karne pe page open hu jaye-->
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',				<!--login page-->
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',						<!--main page-->
			controller: 'mainController'
		})
		.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',					<!--restaurant page-->
		controller: 'restaurantController'
	})
	.when('/grocery list',{
		templateUrl:'pages/shoppinglist.html', 					<!--grocerylist or items to be purchased  page-->
		controller:'groceryListController'
	})
	})


<!--different restaurant information-->

foodieApp.controller('mainController',function($scope) {
$scope.restaurants=
	[{
 name: 'Farzi Cafe',																															<!--first restaurant-->
 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 vote: '4.2',
 cuisines: 'Modern Indian',
 cost: '2200',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 bestDish: {
	name: 'Corn Pizza',																																					<!--best dish of the restaurant-->
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Dominos',																																		<!--second restaurant-->
 address: 'PVR Anupam Saket,Community Center,saket ,New Delhi',
 location: 'Saket',
 category: 'Casual Dining, Bar',
 vote: '4.2',
 cuisines: 'Modern Indian,Chinese',
 cost: '400',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Sagar Ratna',																																				<!--third restaurant-->
 address: 'SCO 488  Sector 35C , Chandigarh',
 location: 'Chandigarh',
 category: 'Casual Dining, Bar',
 vote: '4.5',
 cuisines: 'Modern Indian',
 cost: '2000',
 hours: '11 PM to 11 PM (Mon-Sun)',
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Pizza Hut',																																							<!--fourth restaurant-->
 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 vote: '4.8',
 cuisines: 'Modern Indian',
 cost: '500',
 hours: '12 Noon to 11 PM (Mon-Sun)',
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Burger King',																																							<!--fifth restaurant-->
 address: '40/41, Level 1, Block F , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 vote: '4.8',
 cuisines: 'Modern Indian',
 cost: '400',
 hours: '12 Noon to 11 PM (Mon-Sun)',
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}
]

})

<!--telling the location of home using the login page-->

foodieApp.controller('loginController',function($scope , $location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home')
	}

})

<!--defining restaurant controller-->

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
		$scope.restaurantId = $routeParams.id;

<!--calling the $scope restaurant to show restaurant one by one-->
	var restaurants =
	 [{
	name: 'Farzi Cafe',																														<!--first restaurant-->
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
 	name: 'Corn Pizza',																																					<!--best dish of the restaurant-->
 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
 },
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
 {
 name: 'Dominos',																																		<!--second restaurant-->
	address: 'PVR Anupam Saket,Community Center,saket ,New Delhi',
	location: 'Saket',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian,Chinese',
	cost: '400',
	hours: '12 Noon to 1 AM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
 name: 'Sagar Ratna',																																	<!--third restaurant-->
	address: 'SCO 488  Sector 35C , Chandigarh',
	location: 'Chandigarh',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'Modern Indian',
	cost: '2000',
	hours: '11 PM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
 name: 'Pizza Hut',																																			<!--fourth restaurant-->
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian',
	cost: '500',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},

{
 name: 'Burger King',																																			<!--fifth  restaurant-->
	address: '40/41, Level 1, Block F , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian',
	cost: '500',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}

]
<!--jo user number dalega use ik kaam kyunki array 0 se start hota hai-->
	$scope.restaurant = restaurants[$routeParams.id - 1];

<!--intialising array-->
$scope.ingredients = [];

<!--using clarifai to tell ingredients of best dish of restaurant-->
$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key b368250c9dd04b83b131a364fc6dd36a',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {																							<!--function of success-->
		var ingredients = response.data.outputs[0].data.concepts;
		for (var i =0;i < ingredients.length;i++) {
		$scope.ingredients.push(ingredients[i].name);
  			}

        })
	}
})

<!--telling the grocerylist using the hime page-->
 foodieApp.controller('grocerylistController',function($scope , $location) {
 	$scope.goToGroceryList = function() {
 		//console.log('Do Something')
 		$location.url('grocerylist')
 	}
 })

//var  foodieApp=angular.module('foodieApp',[]);

  foodieApp.controller('grocerylistController',function(){

  // $scope.lists=['beans','tomatoes'];
  // $scope.item='';
  // $scope.form_error="";
  // $scope.addItem = function () {
 // 		if($scope.item.length == 0){
  // 			$scope.form_error = true;
  // 		}
  // 		else{
  // 			$scope.form_error = false;
  // 			$scope.lists.unshift($scope.new_item);
  // 			$scope.item = '';
  // 		}
  //    }
	//
  //     $scope.deleteItem = function(i){
  //     	if(confirm("Are  you sure?")){
  //     		$scope.lists.splice(i, 1);
  //     	}
  //     }

})
