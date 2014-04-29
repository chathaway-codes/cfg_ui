'use strict';

angular.module('cfgUiApp')
  .controller('MainCtrl', function ($scope, $compile) {
    var $ = window.$;
    $scope.monies = 500;

    $scope.sentences = [
      {
        id: 1,
        cost: 100,
        content: 'It was under this red cross banner of St. George that Richard I., the Lion-hearted, after proving their seamanship in victory and giving his men their battle-cry, \"Saint George—forward!\" showed the mettle of his English Crusaders in the battles of the Holy Land, and led them to the walls of Jerusalem.',
        visible: false
      },
      {
        id: 2,
        cost: 100,
        content: 'With it the fleets of Edward I. claimed and maintained the \"lordship of the Narrow Seas.\"',
        visible: true
      },
      {
        id: 3,
        cost: 100,
        content: 'Under this single red cross flag the ships of England won the epochal naval victory of Sluys, where the English bowman shot his feathered shafts from shipboard as blithely as when afterwards on land the French battlefields resounded to the cry of \"England and St. George,\" when the undying glories of Cressy and Poictiers were achieved, and again at Agincourt when Henry V. led on his men to victory.',
        visible: false
      },
      {
        id: 4,
        cost: 100,
        content: 'Under it, too, Cabot discovered Cape Breton, Drake sailed around the world, Frobisher sought the Northwest passage, Raleigh founded Virginia, and the navy of Elizabeth carried confusion into the ill-fated Spanish Armada.',
        visible: false
      }
    ];

    $scope.buy = function(id) {
        for(var i in $scope.sentences) {
          if($scope.sentences[i].id === id) {
            $scope.sentences[i].visible = true;
            $scope.monies -= $scope.sentences[i].cost;
            return;
          }
        }
      };

    $scope.click = function(event, id) {
        $(event).popover(  {
            html: true,
            title: 'Buy Context',
            placement: 'top',
            content: function() {
              return $compile('<h5>500 monies</h5><a class="btn" ng-click="buy(' + id + ')">Buy</a>')($scope);
            }
          });
      };
  });
