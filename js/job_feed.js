var app = angular.module('job_feed',[]);
var date = new Date();
var feedUrl = "https://openws.herokuapp.com/jobs?apiKey=8fa0e46f0361117d65d91d6032391324";

app.controller('FeedCtrl', function($scope, $http){
  $scope.jobListings = [];

  $http.get(feedUrl)
    .then(function success(response) {
      var feed = response.data;

      feed.forEach(function(job){
        job.date = job.created_at.slice(0,9).replace(/-/g, "");
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
