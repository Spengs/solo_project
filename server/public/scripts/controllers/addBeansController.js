myApp.controller('AddBeansController', ['$scope', '$http', 'CoffeeFactory', function ($scope, $http, CoffeeFactory) {
  console.log('addBeans controller works');

  $scope.newCoffee = {};

  $scope.submitCoffee = function () {
    var data = $scope.newCoffee;
    $http.post('/beans', data)
    .then(function () {
      console.log('POST /beans', data);
    });
  };
}]);
