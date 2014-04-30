'use strict';

angular.module('cfgUiApp')
  .service('Context', function Context($resource) {
    var config = window.config;
    return $resource(config.routes.context, null, {
        'new': {method: 'GET', url: config.routes.contextNew}
      });
  });
