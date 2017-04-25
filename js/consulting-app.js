var app = angular.module('consulting_app',[]);
var date = new Date();
var mainUrl = "https://openws.herokuapp.com/contact?apiKey=8fa0e46f0361117d65d91d6032391324";
var htmlOptions = ['app_templates/about.html','app_templates/contact.html','app_templates/portfolio.html'];

$('#title').on('input', function(){
	$('#status').empty();
});

class postObject {
	constructor(name, phone, business, message) {
		this.upload_time = Date.now();
		this.name = name;
  	this.phone = phone;
  	this.charity = business;
		this.date = date.toLocaleDateString();
		this.message = message;
	}
}

app.controller('ContentCtrl', function($scope, $http){
	$scope.name = "";
	$scope.phone = "";
	$scope.business = "";
	$scope.message = "";
  $scope.content = htmlOptions[0];

  $scope.getContent = function(index) {
    $scope.content = htmlOptions[index];
  }

  $scope.showContent = function() {
    return $scope.content;
  }

	$scope.messageSubmit = function(){
		var newObj = new postObject($scope.name, $scope.phone, $scope.business, $scope.message);
		newObj = JSON.stringify(newObj);

		$scope.postNewObject(newObj);
	}


	$scope.postNewObject = function(newObj) {
		$http.post(mainUrl, newObj)
		.then(function success(response) {
		    console.log(response);
				$('#form')[0].reset();
				$('#status').html("Message Sent!");

		  }, function error(response){
		    console.log(response);
				$('#status').text(" Something went wrong..Try again.");
		});
	}
});
