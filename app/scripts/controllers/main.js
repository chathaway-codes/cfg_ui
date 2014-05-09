'use strict';

angular.module('cfgUiApp')
  .controller('MainCtrl', function ($scope, $compile, $route, $modal, Context, User, Chs, Guess) {
    var $ = window.$;

    var createPopovers = function() {
      // Create popovers
      for(var i in $scope.context.sentences) {
        var sentence = $scope.context.sentences[i];
        var id = $scope.context.sentences[i].sentence.id;
        var item = '#sentence'+id;
        var item_class = '.sentence'+id
        var content = $compile('<h5>'+sentence.cost+' monies</h5><a class="btn" ng-click="buy(\'' + item + '\', ' + id + ')">Buy</a>')($scope);
        console.log(item_class);
        $(item_class).popover({
            html: true,
            title: 'Buy Context',
            placement: 'top',
            content: content,
            trigger: 'hover click'
          });
      }
    };


    $scope.user = User.get();
    $scope.context = Context.new(null, createPopovers);

    var findSentence = function(id) {
        for(var i in $scope.context.sentences) {
          if($scope.context.sentences[i].sentence.id === id) {
            return $scope.context.sentences[i];
          }
        }
        return undefined;
      };

    $scope.buy = function(item, id) {
        var sentence = findSentence(id);
        sentence.$update(null, function(httpResponse) {
            $scope.user.monies -= sentence.cost;
            $(item).popover('hide');
            $(item).popover('disable');
          }, function(httpResponse) {
          $(item).popover('hide');
          if(httpResponse.status === 403) {
            $modal.open({
              templateUrl: 'views/needmoniesmodal.html',
              controller: 'NeedmoniesCtrl'
            });
          }
        });
      };

    $scope.makeGuess = function() {
        var guess = new Guess({context: $scope.context, guess: $scope.guess});
        guess.$save();
        $scope.next();
      };

    $scope.next = function() {
        $route.reload();
      };

    $scope.makeReview = function() {
        $modal.open({
          templateUrl: 'views/review.html',
          controller: 'ReviewCtrl'
        });
        // Update user after
        $scope.user = User.get();
      };

    $scope.click = function(item, id) {
        var sentence = findSentence(id);
        if(sentence.visible)
            return;
        var content = $compile('<h5>'+sentence.cost+' monies</h5><a class="btn" ng-click="buy(\'' + item + '\', ' + id + ')">Buy</a>')($scope);
        $(item).popover({
            html: true,
            title: 'Buy Context',
            placement: 'top',
            content: content
          });
        $(item).popover('show');
      };
  });
