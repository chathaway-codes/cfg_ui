'use strict';

angular.module('cfgUiApp')
  .service('Guess', function Guess($resource) {
    var config = window.config;
    return $resource(config.routes.guess, {id: '@id'}, {
        'update': {method: 'PUT'}
      });
  });
