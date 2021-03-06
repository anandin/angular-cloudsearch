'use strict';

var KEYS = {
  backspace: 8,
  tab: 9,
  enter: 13,
  escape: 27,
  space: 32,
  up: 38,
  down: 40,
  comma: 188
};

angular.module('imorgoModule', [
  'facetModule',
  'imorgo.controller',
  'imorgo.custominput',
  'imorgo.autocomplete',
  'imorgo.factory',
  'imorgo.trust',
  'imorgo.service',
  'ui.bootstrap',
  'ngRoute',
  'ngSanitize',
  'imorgo.contentItem',
  'angularUtils.directives.dirPagination'
])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        title: 'imorgo',
        templateUrl: 'views/main.html',
        controller: 'imorgoController'
      })
      .otherwise({
        redirecTo: '/'
      });

    $locationProvider.html5Mode(false);
  }])
  .run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.ddate = new Date().getFullYear();

    $rootScope.$on('$routeChangeSuccess', function(oVal, nVal) {
      if(oVal !== nVal) {
        document.title = $route.current.title;
      }
    });
  }]);
