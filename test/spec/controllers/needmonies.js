'use strict';

describe('Controller: NeedmoniesCtrl', function () {

  // load the controller's module
  beforeEach(module('cfgUiApp'));

  var NeedmoniesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NeedmoniesCtrl = $controller('NeedmoniesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
