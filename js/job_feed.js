var app = angular.module('job_feed',[]);
var date = new Date();
const feedUrl = "https://openws.herokuapp.com/jobs";
const urlKey = "?apiKey=8fa0e46f0361117d65d91d6032391324";

app.controller('FeedCtrl', function($scope, $http){
  $scope.jobListings = [];

  $scope.DeleteJob = function(id) {
    $http.delete(feedUrl + '/' + id + urlKey)
      .then(function success(response){
        var updatedList = $scope.jobListings.filter(job => job._id !== id);
        $scope.jobListings = updatedList;
      }, function error(response){
          console.log(response);
    });
  }

  $http.get(feedUrl + urlKey)
    .then(function success(response) {
      var feed = response.data;

      feed.forEach(function(job){
        job.date = job.created_at.slice(0,10).replace(/-/g, "");
        job.year = job.date.substring(0,4);
        job.month = job.date.substring(4,6);
        job.day = job.date.substring(6);
      });

      feed.sort(function(a, b) { return parseFloat(b.date) - parseFloat(a.date) });

      $scope.jobListings = feed;

    }, function error(response){
        console.log(response);
  });
});
