var myApp = angular.module('myApp', ['ngRoute']);

console.log('angular routes working');

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/brew', {
      templateUrl: 'views/templates/brew.html',
      controller: 'BrewController',
    })
    .when('/beans', {
      templateUrl: 'views/templates/beans.html',
      controller: 'BeanController',
    })
    .otherwise({
      redirectTo: '/brew',
    });
}]);
