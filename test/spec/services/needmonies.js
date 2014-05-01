'use strict';

describe('Service: Needmonies', function () {

  // load the service's module
  beforeEach(module('cfgUiApp'));

  // instantiate service
  var Needmonies;
  beforeEach(inject(function (_Needmonies_) {
    Needmonies = _Needmonies_;
  }));

  it('should do something', function () {
    expect(!!Needmonies).toBe(true);
  });

});
