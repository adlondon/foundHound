angular.module('found', [
    'ui.router'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.found', {
        url: '/found',
        views: {
          'found-main': {
            templateUrl: 'found/views/found-main.html',
            controller: 'FoundCtrl'
          }
        }
      })
  });
