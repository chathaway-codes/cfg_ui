'use strict';

angular.module('cfgUiApp')
  .controller('MainCtrl', function ($scope) {
    var $ = window.$;
    $scope.monies = 500;

    $scope.click = function(event) {
        $(event).popover(  {
            html: true,
            title: 'Buy Context',
            content: '<h5>500 monies</h5><a class="btn">Buy</a>'
          });
      };
  });
