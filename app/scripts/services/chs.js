'use strict';

angular.module('cfgUiApp')
  .service('Chs', function Chs($resource) {
    var config = window.config;
    return $resource(config.routes.chs, {id: '@id'}, {
        'update': {method: 'PUT'}
      });
  });
