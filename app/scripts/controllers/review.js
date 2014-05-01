'use strict';

angular.module('cfgUiApp')
  .controller('ReviewCtrl', function ($scope, $modalInstance, Review) {
    $scope.review = Review.new();
    $scope.submit = function() {
        $scope.review.$save();
        $scope.close();
      };

    $scope.close = function() {
        $modalInstance.close();
      };
  });
