'use strict';

angular.module('cfgUiApp')
  .service('Context', function Context($resource, Chs) {
    var config = window.config;
    return $resource(config.routes.context, null, {
        'new': {method: 'GET', url: config.routes.contextNew, transformResponse: function(data) {
            data = JSON.parse(data);
            for(var i=0; i < data.sentences.length; i++) {
              data.sentences[i] = new Chs(data.sentences[i]);
            }
            return data;
          }}
      });
  });
