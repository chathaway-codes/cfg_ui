'use strict';

angular.module('cfgUiApp')
  .service('Review', function Review($resource) {
    var config = window.config;
    return $resource(config.routes.review, null, {
        'new': {method: 'GET', url: config.routes.reviewNew}
      });
  });
