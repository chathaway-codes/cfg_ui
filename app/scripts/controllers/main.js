'use strict';

angular.module('cfgUiApp')
  .controller('MainCtrl', function ($scope, $compile, $route, $modal, Context, User, Chs, Guess) {
    var $ = window.$;

    $scope.user = User.get();
    $scope.context = Context.new();

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
        sentence.$update(null, function() {
            $(item).popover('toggle');
            $(item).popover('disable');
          }, function(httpResponse) {
          $(item).popover('toggle');
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

    $scope.click = function(item, id) {
        console.log('Here');
        // If the sentence isn't blurred, exit
        var sentence = findSentence(id);
        if(sentence === undefined || sentence.visible) {
          return;
        }

        $(item).popover(  {
            html: true,
            title: 'Buy Context',
            placement: 'top',
            content: function() {
              return $compile('<h5>'+sentence.cost+' monies</h5><a class="btn" ng-click="buy(\'' + item + '\', ' + id + ')">Buy</a>')($scope);
            }
          });
        $(item).popover('toggle');
      };
  });
