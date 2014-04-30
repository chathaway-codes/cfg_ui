'use strict';

angular.module('cfgUiApp')
  .controller('MainCtrl', function ($scope, $compile, Context) {
    var $ = window.$;
    $scope.monies = 500;

    $scope.context = Context.new();
    console.log($scope.context);

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
        sentence.visible = true;
        $scope.monies -= sentence.cost;
        $(item).popover('disable');
      };

    $scope.click = function(item, id) {
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
      };
  });
