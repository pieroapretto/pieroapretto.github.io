var app = angular.module('philanthropy_app',[]);
var date = new Date();
var mainUrl = "https://openws.herokuapp.com/charity?apiKey=8fa0e46f0361117d65d91d6032391324";

$('#title').on('input', function(){
	$('#status').empty();
});

class postObject {
	constructor(name, phone, charity, website, message) {
		this.upload_time = Date.now();
		this.name = name;
  	this.phone = phone;
  	this.charity = charity;
		this.website = website;
		this.date = date.toLocaleDateString();
		this.message = message;
	}
}

app.controller('MessageCtrl', function($scope, $http){
	$scope.name = "";
	$scope.phone = "";
	$scope.charity = "";
	$scope.website = "";
	$scope.message = "";
	$scope.messageSubmit = function(){
		var newObj = new postObject($scope.name, $scope.phone, $scope.charity, $scope.website, $scope.message);
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
