'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tweet/:id', {
    templateUrl: 'tweet/tweet.html',
    controller: 'TweetCtrl'
  });
}])

.controller('TweetCtrl', ['$scope', '$q', 'twitterService', '$routeParams', function($scope, $q, twitterService, $routeParams) {

    twitterService.initialize();

    $scope.init = function() {
        twitterService.getRetweet($routeParams.id).then(function(data) {
            $scope.retweets = data;
        });
    }

    $scope.retweet = function() {
        twitterService.retweetTweet($routeParams.id).then(function(data) {
            //$scope.retweets = data;
            console.log('tweeeeeeeeeeet');
        });
    }

    $scope.init();

}]);