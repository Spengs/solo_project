var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
    .when('/addBeans', {
      templateUrl: 'views/templates/addBeans.html',
      controller: 'AddBeansController',
    })
    .otherwise({
      redirectTo: '/brew',
    });
}]);
