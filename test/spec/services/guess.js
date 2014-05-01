'use strict';

describe('Service: Guess', function () {

  // load the service's module
  beforeEach(module('cfgUiApp'));

  // instantiate service
  var Guess;
  beforeEach(inject(function (_Guess_) {
    Guess = _Guess_;
  }));

  it('should do something', function () {
    expect(!!Guess).toBe(true);
  });

});
