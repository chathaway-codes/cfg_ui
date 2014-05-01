'use strict';

describe('Service: Chs', function () {

  // load the service's module
  beforeEach(module('cfgUiApp'));

  // instantiate service
  var Chs;
  beforeEach(inject(function (_Chs_) {
    Chs = _Chs_;
  }));

  it('should do something', function () {
    expect(!!Chs).toBe(true);
  });

});
