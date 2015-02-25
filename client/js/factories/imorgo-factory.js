// FACTORY
angular.module('imorgo.factory', []).factory('imorgoFactory', ['$rootScope', '$http', function($rootScope, $http) {
  var searchFactory = new Object();
  searchFactory.getResponseData = function(urlParams) {
    return $http.get(urlParams);
  };
  return searchFactory;
}]);
