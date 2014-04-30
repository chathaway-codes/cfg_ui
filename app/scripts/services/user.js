'use strict';

angular.module('cfgUiApp')
  .service('User', function User($resource) {
    var config = window.config;
    return $resource(config.routes.user, null, {
        'get': {method: 'GET', isArray: false}
      });
  });
