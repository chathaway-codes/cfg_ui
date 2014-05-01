'use strict';

angular.module('cfgUiApp')
  .controller('NeedmoniesCtrl', function ($scope, $modalInstance) {
    $scope.close = function() {
        $modalInstance.close();
      };
  });
